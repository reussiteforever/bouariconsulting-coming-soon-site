import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import path from 'path'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  admin: {
    user: 'users',
  },
  editor: lexicalEditor(),
  collections: [
    // We'll add collections here
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      slug: 'newsletter-subscribers',
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
          unique: true,
        },
        {
          name: 'subscribedAt',
          type: 'date',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Active', value: 'active' },
            { label: 'Unsubscribed', value: 'unsubscribed' },
          ],
          defaultValue: 'active',
        },
      ],
    },
  ],
  email: nodemailerAdapter({
    defaultFromAddress: process.env.EMAIL_USER || 'info@boemin.com',
    defaultFromName: 'BOEMIN',
    // Nodemailer transport options
    transportOptions: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    },
  }),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/boemin-website',
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
