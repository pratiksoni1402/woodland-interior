'use server';
import { contactUsFormSchema } from '@/app/contact-us/form/schema';
import type { ApiMessage } from '@/types/api';
import { submitUserQuery } from '@/repository/contact-us';

export async function SubmitUserQuery(formData: any) {
	let rawData: object = {};
	let fnStatus: boolean = true;
	let fnCode: string = 'URS001';
	let responseCode: number = 200;
	let message = <ApiMessage>{};
	let parsedData;
	let result;
	let serverError;

	try {
		console.log('Data in actions', formData.firstName);
		if (fnStatus) {
			rawData = {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				subject: formData.subject,
				message: formData.message,
			};
		}

		if (fnStatus) {
			parsedData = contactUsFormSchema.safeParse(rawData);
			console.log('Parsed data', parsedData);
			if (!parsedData.success) {
				fnStatus = false;
				fnCode = 'URS001';
				message = {
					type: 'error',
					content: 'Invalid Data',
				};
			}
		}

		if (fnStatus) {
			if (parsedData && parsedData.data) {
				result = await submitUserQuery(parsedData.data);
				if (result.status === 200) {
					responseCode = 200;
					fnCode = 'URS002';
					message = {
						type: 'success',
						content: 'Request submitted successfully',
					};
				} else {
					fnCode = 'URS003';
				}
			}
		}
	} catch (error) {
		fnStatus = false;
		fnCode = '004';
		serverError = error;
	}

	return {
		success: fnStatus,
		code: fnCode,
		message: message,
	};
}
