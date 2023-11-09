import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    // Validation can also happen here
    console.log({ id });

    // const res = await sql`
    //   DELETE * FROM users
    //   WHERE id = ${email}
    // `;
    // console.log({ res });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: 'success' });
}
