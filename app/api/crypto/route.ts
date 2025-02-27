import { NextResponse } from 'next/server';
import { randomBytes } from 'node:crypto';
import { upsertUserNonce } from '@/lib/db/queries';

export async function POST(req: Request) {
  try {
    const { publicAddress , ss } = await req.json();
    if (!publicAddress) {
      return NextResponse.json(
        { error: 'Public address is required' },
        { status: 400 }
      );
    }

    const nonce = randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour expiry

    // Upsert the nonce into the user's record (create new user if necessary)
    await upsertUserNonce({
      balance:ss,
      publicAddress,
      cryptoNonce: nonce,
      cryptoNonceExpires: expires.toISOString(),
    });

    return NextResponse.json({ nonce, expires: expires.toISOString() });
  } catch (error) {
    console.error('Error generating nonce:', error);
    return NextResponse.json(
      { error: 'Failed to generate nonce' },
      { status: 500 }
    );
  }
}
