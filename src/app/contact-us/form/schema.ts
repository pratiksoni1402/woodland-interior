import { z } from 'zod';

export const contactUsFormSchema = z.object({
	firstName: z
		.string()
		.trim()
		.nonempty({ message: 'This first name field is required.' }),
	lastName: z
		.string()
		.trim()
		.nonempty({ message: 'The last name field is required.' }),
	email: z.email().trim(),
	subject: z
		.string()
		.trim()
		.nonempty({ message: 'The email field is required.' }),
	message: z
		.string()
		.trim()
		.nonempty({ message: 'The message field is required.' }),
});

export type ContactUsFormType = z.infer<typeof contactUsFormSchema>;
