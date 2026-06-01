import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: 'Name, email and phone are required.' }, { status: 400 });
  }

  // Enquiry is delivered via WhatsApp on the client side.
  // Respond with success so the redirect fires immediately.
  return NextResponse.json({ success: true });
}
