import EmailTemplate from '@/app/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "juniorapostolo2010@gmail.com",
      to: ['juniorapostolo2010@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: "Junior" }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
