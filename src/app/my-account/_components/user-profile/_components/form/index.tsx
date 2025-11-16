'use client'
import {
	Form,
	FormField,
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserProfileFormSchema } from '@/app/my-account/_components/user-profile/_components/form/schema'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import './style.css'
export function UserProfileForm() {
	const form = useForm({
		resolver: zodResolver(UserProfileFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			addressLineOne: '',
			addressLineTwo: '',
			country: '',
			state: '',
			city: '',
			pinCode: '',
			phoneNumber: '',
		},
	})

	const onSubmit = () => {}

	return (
		<div className="user-profile-form">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div>
						<div className="form-fields">
							<div className="field-wrapper">
								<FormField
									name="firstName"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>First name</FormLabel>
											<FormControl>
												<Input placeholder="John" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								name="lastName"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last name</FormLabel>
										<FormControl>
											<Input placeholder="Doe" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="addressLineOne"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Address Line One</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="addressLineTwo"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Address Line Two</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="country"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Country</FormLabel>
									<FormControl>
										<Select>
											<SelectTrigger className="w-[180px]">
												<SelectValue placeholder="Select a fruit" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Fruits</SelectLabel>
													<SelectItem value="apple">Apple</SelectItem>
													<SelectItem value="banana">Banana</SelectItem>
													<SelectItem value="blueberry">Blueberry</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">Pineapple</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="state"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>State</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="city"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>City</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="pinCode"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Pincode</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="phoneNumber"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button>Update Profile</Button>
				</form>
			</Form>
		</div>
	)
}
