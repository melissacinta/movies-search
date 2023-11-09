import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
export async function PUT(req: Request) {
  try {
    const { name, phone, email } = await req.json();
    // Validation can also happen here
    console.log({ name, phone, email });

    const res = await sql`
      UPDATE users
      SET name = ${name}, phone = ${phone}
      WHERE email = ${email}
    `;
    console.log({ res });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: 'success' });
}
