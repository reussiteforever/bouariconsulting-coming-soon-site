// app/api/notify/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Subscription Confirmed!',
      text: 'Thank you for subscribing to our newsletter.',
      headers: {
        'X-GM-LABELS': 'Social', // Gmail-specific label
      },
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
