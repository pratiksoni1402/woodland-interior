'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormField,
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { SubmitUserQuery } from '@/app/contact/action';
import {
	contactUsFormSchema,
	type ContactUsFormType,
} from '@/app/contact/component/form/schema';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
	const form = useForm<ContactUsFormType>({
		resolver: zodResolver(contactUsFormSchema),

		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			subject: '',
			message: '',
		},
	});

	// Submit user query action
	const onSubmit = async (data: z.infer<typeof contactUsFormSchema>) => {
		try {
			setLoading(true);
			const response = await SubmitUserQuery(data);
			console.log('response', response);
			if (response.success) {
				form.reset();
				toast[response.message.type](response.message.content);
			}
		} catch (error) {
			toast.error('Please try again ');
		} finally {
			setLoading(false);
		}
	};
	// End
	const [isLoading, setLoading] = useState(false);

	return (
		<div className="contact-form">
			<div className="form-wrapper">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="bg-white border border-[#b2937e] sm:p-5 p-2.5 rounded-md"
					>
						<div className="flex sm:flex-nowrap flex-wrap sm:gap-5 mb-6">
							<FormField
								control={form.control}
								name="firstName"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>First name</FormLabel>
										<FormControl>
											<Input placeholder="John" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="lastName"
								control={form.control}
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>Last name</FormLabel>
										<FormControl>
											<Input placeholder="Doe" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="flex sm:flex-nowrap flex-wrap sm:gap-5 mb-6">
							<FormField
								name="email"
								control={form.control}
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder="johndoe@example.com" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="subject"
								control={form.control}
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>Subject</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							name="message"
							control={form.control}
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="mt-5 flex justify-center">
							<Button
								type="submit"
								disabled={isLoading}
								className="bg-primary border px-6 py-3 w-36 border-primary rounded-md text-white
               hover:cursor-pointer hover:border-secondary hover:bg-secondary
               hover:text-white font-roboto transition-all duration-300"
							>
								{isLoading && <Loader2Icon className="animate-spin mr-1" />}
								Submit
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}
