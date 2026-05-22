import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, school_type, state, city, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: 'Name, email and phone are required.' }, { status: 400 });
  }

  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const errors: string[] = [];

  // ── 1. Send email via Gmail ───────────────────────────────────────────────
  try {
    await transporter.sendMail({
      from: `"DALIMSS Website" <${process.env.GMAIL_USER}>`,
      to: 'info@dalimss.com',
      replyTo: email,
      subject: `New Partner Enquiry — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto">
          <div style="background:#7B1C1C;padding:20px 28px">
            <h2 style="color:#C9A227;margin:0">New Partner Enquiry</h2>
          </div>
          <div style="padding:24px 28px;border:1px solid #e0e0e0">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#888;width:140px">Full Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr style="background:#fafafa"><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#7B1C1C">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#888">Contact No.</td><td style="padding:8px 0">${phone}</td></tr>
              <tr style="background:#fafafa"><td style="padding:8px 0;color:#888">School Type</td><td style="padding:8px 0">${school_type || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#888">State</td><td style="padding:8px 0">${state || '—'}</td></tr>
              <tr style="background:#fafafa"><td style="padding:8px 0;color:#888">City</td><td style="padding:8px 0">${city || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#888;vertical-align:top">Message</td><td style="padding:8px 0">${message || '—'}</td></tr>
            </table>
          </div>
          <div style="padding:12px 28px;background:#f5f5f5;font-size:12px;color:#aaa">
            Submitted on ${timestamp} IST via dalimss.com
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error('[contact] Gmail error:', err);
    errors.push('email');
  }

  // ── 2. Append row to Google Sheet via Apps Script ─────────────────────────
  if (process.env.GOOGLE_SCRIPT_URL) {
    try {
      await fetch(process.env.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp, name, email, phone, school_type, state, city, message }),
        redirect: 'follow',
      });
    } catch (err) {
      console.error('[contact] Google Sheets error:', err);
      errors.push('sheet');
    }
  }

  if (errors.includes('email')) {
    return NextResponse.json({ error: 'Could not send your enquiry. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
