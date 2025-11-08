import prisma from '@/db';

export async function submitUserQuery(formData: any) {
	const submitUserRequest = await prisma.userquery.create({
		data: {
			firstname: formData.firstName,
			lastname: formData.lastName,
			email: formData.email,
			subject: formData.subject,
			message: formData.message,
		},
	});

	return Response.json({ submitUserRequest });
}
