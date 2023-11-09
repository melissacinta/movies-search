import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';
export async function POST(req: Request) {
  try {
    const { name, phone, email, password } = await req.json();
    // Validation can also happen here
    console.log({ name, phone, email, password });
    const hashedPassword = await hash(password, 10);

    const res = await sql`
      INSERT INTO users (name, phone, email, password)
      VALUES (${name}, ${phone}, ${email}, ${hashedPassword})
    `;
    console.log({ res });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: 'success' });
}
