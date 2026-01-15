# Payload CMS Email Configuration

This project now includes Payload CMS with nodemailer email integration.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Server Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/boemin-cms

# Payload CMS Secret Key (generate a random string)
PAYLOAD_SECRET=your-secret-key-here
```

## Gmail Setup

To use Gmail with nodemailer:

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Go to Google Account Settings > Security
   - Under "2-Step Verification", click "App passwords"
   - Generate a new app password for "Mail"
   - Use this password as `EMAIL_PASSWORD`

## MongoDB Setup

### Option 1: Local MongoDB
Install MongoDB locally and it will be available at `mongodb://localhost:27017`

### Option 2: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Add it to your `.env.local` as `MONGODB_URI`

## Running the Application

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Access Payload CMS Admin Panel:
```
http://localhost:3000/admin
```

## First Time Setup

1. Navigate to `http://localhost:3000/admin`
2. Create your first admin user
3. You can now manage:
   - Newsletter subscribers
   - Users
   - Send emails through Payload

## Using Email in Your Code

### Send Email Using Payload

```typescript
import { sendPayloadEmail } from '@/lib/payload-email'

await sendPayloadEmail({
  to: 'user@example.com',
  subject: 'Hello!',
  text: 'Plain text email',
  html: '<h1>HTML email</h1>',
})
```

### Subscribe to Newsletter

```typescript
import { subscribeToNewsletter } from '@/lib/payload-email'

const result = await subscribeToNewsletter('user@example.com')
```

## Collections

### Newsletter Subscribers
- **Slug**: `newsletter-subscribers`
- **Fields**:
  - `email` (required, unique)
  - `subscribedAt` (auto-filled)
  - `status` (active/unsubscribed)

### Users
- **Slug**: `users`
- **Auth enabled**: Yes
- Used for Payload admin authentication

## Email Configuration Details

The email is configured in [payload.config.ts](./payload.config.ts):

```typescript
email: nodemailerAdapter({
  defaultFromAddress: process.env.EMAIL_USER || 'info@boemin.com',
  defaultFromName: 'BOEMIN',
  transportOptions: {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
})
```

## API Routes

Payload automatically creates REST API endpoints:

- `GET /api/newsletter-subscribers` - List all subscribers
- `POST /api/newsletter-subscribers` - Create subscriber
- `GET /api/newsletter-subscribers/:id` - Get subscriber
- `PATCH /api/newsletter-subscribers/:id` - Update subscriber
- `DELETE /api/newsletter-subscribers/:id` - Delete subscriber

## Updating Your Newsletter Form

You can now update your existing newsletter form API route to use Payload's email system instead of the direct nodemailer implementation.

Example:
```typescript
// app/api/notify/route.ts
import { subscribeToNewsletter } from '@/lib/payload-email'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 })
  }

  const result = await subscribeToNewsletter(email)

  if (result.success) {
    return NextResponse.json({ message: 'Successfully subscribed!' })
  } else {
    return NextResponse.json({ message: result.message }, { status: 400 })
  }
}
```

## Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running locally or your Atlas connection string is correct
- Check that your IP is whitelisted in MongoDB Atlas

### Email Not Sending
- Verify your Gmail credentials in `.env.local`
- Make sure you're using an App Password, not your regular Gmail password
- Check if 2FA is enabled on your Google account

### Admin Panel Not Loading
- Clear your browser cache
- Check if all dependencies are installed (`npm install`)
- Verify `PAYLOAD_SECRET` is set in your environment variables
