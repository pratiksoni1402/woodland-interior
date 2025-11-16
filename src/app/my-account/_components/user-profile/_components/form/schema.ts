import { z } from 'zod';

export const UserProfileFormSchema = z.object({
	firstName: z
		.string()
		.trim()
		.nonempty({ message: 'First name field is required' }),
	lastName: z
		.string()
		.trim()
		.nonempty({ message: 'Last name field is required' }),
	addressLineOne: z
		.string()
		.trim()
		.nonempty({ message: 'Address line one is required' }),
	addressLineTwo: z
		.string()
		.trim()
		.nonempty({ message: 'Address line two is required' }),
	country: z.string().trim().nonempty({ message: 'Please select country' }),
	state: z.string().trim().nonempty({ message: 'State field is required' }),
	city: z.string().trim().nonempty({ message: 'City field is required' }),
	pinCode: z
		.string()
		.trim()
		.nonempty({ message: 'Pincode field is required' })
		.min(6, { message: 'Pincode cannot be less then 6 digit' })
		.max(6, { message: 'Pincode cannot exceed 6 digit' }),
	phoneNumber: z
		.string()
		.trim()
		.regex(/^\d+$/, { message: 'Phone number must contain only digits' })
		.min(10, { message: 'Phone number must be exactly 10 digits' })
		.max(10, { message: 'Phone number must be exactly 10 digits' }),
});

export type UserProfileFormType = z.infer<typeof UserProfileFormSchema>;
