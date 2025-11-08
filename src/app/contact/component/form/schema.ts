import { z } from 'zod';

export const contactUsFormSchema = z.object({
	firstName: z
		.string()
		.nonempty({ message: 'This first name field is required.' }),
	lastName: z
		.string()
		.nonempty({ message: 'The last name field is required.' }),
	email: z.email(),
	subject: z.string().nonempty({ message: 'The email field is required.' }),
	message: z.string().nonempty({ message: 'The message field is required.' }),
});

export type ContactUsFormType = z.infer<typeof contactUsFormSchema>;
