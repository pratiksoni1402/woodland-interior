import crypto from 'crypto'
import prisma from '@/db'
import PasswordResetEmailTemplate from '@/app/_components/password-reset-email-template'

import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
let success = 'success'
let fail = 'error'

export async function POST(req: NextRequest) {
	const { email } = await req.json()
	console.log('email in server', email)

	// 1. Check if user exists
	const user = await prisma.credentials.findFirst({ where: { email } })
	console.log('fetched email', user)
	if (!user) {
		return NextResponse.json({
			type: fail,
			message: 'Email does not exist',
		})
	}

	// 2. Generate token
	const token = crypto.randomBytes(32).toString('hex')
	const expires = new Date(Date.now() + 1000 * 60 * 15) // 15 mins expiry

	// 3. Save token in DB
	await prisma.passwordreset.create({
		data: {
			email: user.email,
			token: token,
			expiresAt: expires,
		},
	})

	// 4. Send email via Resend
	const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}auth/password-reset?token=${token}`
	await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: 'delivered@resend.dev',
		subject: 'Password Reset Request',
		react: PasswordResetEmailTemplate({
			resetLink,
			firstName: user.firstname,
			lastName: user.lastname,
		}),
	})

	return NextResponse.json({
		type: success,
		message: 'Password reset link sent successfully',
	})
}
