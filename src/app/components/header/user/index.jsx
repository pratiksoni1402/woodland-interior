'use client';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';

import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

export default function UserAccountLink() {
	// const { data: status } = useQuery({
	// 	queryKey: ['loginCheck'],
	// 	queryFn: () =>
	// 		axios
	// 			.post('/api/auth-check')
	// 			.then((response) => {
	// 				return response.data.userstatus;
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			}),
	// });

	const { data: sessionData } = useQuery({
		queryKey: ['checkSession'],
		queryFn: () =>
			axios
				.get('/api/get-sessiondata')
				.then((response) => {
					console.log('data', response.data.getSessionData);
					return response.data.getSessionData;
				})
				.catch((error) => {
					console.log(error);
				}),
	});

	return (
		<div>
			{sessionData && sessionData.user_details ? ( // Check if sessionData and user_details are not null/undefined
				<Link href="/my-account">
					<Avatar className="text-[#3c2f27]">
						<AvatarFallback className="font-roboto border p-[2px] text-sm">
							{sessionData.user_details?.firstname?.charAt(0)}
							{sessionData.user_details?.lastname?.charAt(0)}
						</AvatarFallback>
					</Avatar>
				</Link>
			) : (
				<Link href="/auth/login">
					<CircleUserRound />
				</Link>
			)}
		</div>
	);
}
