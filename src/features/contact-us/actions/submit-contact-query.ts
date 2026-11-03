'use server'
import { contactUsFormSchema } from '../types/contact-us-form'
import type { ApiMessage } from '@/types/api'
import { submitUserQuery } from '@/repository/contact-us'

interface SubmitContactQueryResult {
	success: boolean
	message: ApiMessage
}

export async function submitContactQuery(
	formData: unknown
): Promise<SubmitContactQueryResult> {
	const parsedData = contactUsFormSchema.safeParse(formData)
	if (!parsedData.success) {
		return {
			success: false,
			message: {
				type: 'error',
				content: 'Please enter valid contact details.',
			},
		}
	}

	try {
		const result = await submitUserQuery(parsedData.data)
		if (!result.ok) {
			throw new Error('Contact request could not be saved.')
		}

		return {
			success: true,
			message: {
				type: 'success',
				content: 'Request submitted successfully',
			},
		}
	} catch (error) {
		console.error('Failed to submit contact request:', error)
		return {
			success: false,
			message: {
				type: 'error',
				content: 'Unable to submit your message. Please try again.',
			},
		}
	}
}
