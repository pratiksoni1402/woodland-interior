import prisma from '@/db';
import type { ContactUsFormType } from '@/app/contact-us/form/schema';

export async function submitUserQuery(formData: ContactUsFormType) {
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
