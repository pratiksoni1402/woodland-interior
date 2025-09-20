import prisma from '@/db';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { token, newPassword } = await req.json();

	// 1. Find token
	const record = await prisma.passwordReset.findUnique({ where: { token } });
	if (!record || record.expiresAt < new Date()) {
		return NextResponse.json(
			{ error: 'Invalid or expired token' },
			{ status: 400 }
		);
	}

	// 2. Hash new password
	const hashedPassword = await bcrypt.hash(newPassword, 10);

	// 3. Update user password
	await prisma.credentials.update({
		where: { email: record.email },
		data: { password: hashedPassword },
	});

	// 4. Delete token
	await prisma.passwordReset.delete({ where: { token } });

	return NextResponse.json({ message: 'Password updated successfully' });
}
