'use client';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

export default function UserAccountLink() {
	const { data: sessionData } = useQuery({
		queryKey: ['checkSession'],
		queryFn: () =>
			axios
				.get('/api/get-sessiondata')
				.then((response) => {
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
				<Link href="/auth">
					<CircleUserRound />
				</Link>
			)}
		</div>
	);
}
