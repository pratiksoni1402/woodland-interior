import { z } from 'zod'

export const contactUsFormSchema = z.object({
	firstName: z
		.string()
		.trim()
		.min(1, { message: 'This first name field is required.' })
		.max(20, { message: 'First name must be 20 characters or fewer.' }),
	lastName: z
		.string()
		.trim()
		.min(1, { message: 'The last name field is required.' })
		.max(20, { message: 'Last name must be 20 characters or fewer.' }),
	email: z
		.email()
		.trim()
		.max(50, { message: 'Email must be 50 characters or fewer.' }),
	subject: z
		.string()
		.trim()
		.min(1, { message: 'The subject field is required.' })
		.max(50, { message: 'Subject must be 50 characters or fewer.' }),
	message: z
		.string()
		.trim()
		.min(1, { message: 'The message field is required.' })
		.max(500, { message: 'Message must be 500 characters or fewer.' }),
})

export type ContactUsFormType = z.infer<typeof contactUsFormSchema>
