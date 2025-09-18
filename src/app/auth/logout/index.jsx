'use client';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
export default function Logout() {
	const [isLoading, setLoading] = useState();
	const router = useRouter();
	const queryClient = useQueryClient();
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
					console.log('Error occured', error);
				}),
	});
	const handlelogout = () => {
		setLoading(true);
		axios
			.post('/api/logout-user')
			.then(() => {
				router.push('/');
				toast.success('Logged out', {
					duration: 1000,
					style: {
						border: '1px solid #3c2f27',
						padding: '8px',
						color: '#faf2ec',
						backgroundColor: '#3c2f27',
					},
					iconTheme: {
						primary: '#faf2ec',
						secondary: '#3c2f27',
					},
				});
				queryClient.invalidateQueries('checkSession');
			})
			.catch((error) => {
				toast.error('error');
				console.log('error', error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="lg:mt-7 mt-0 font-roboto text-base font-medium !text-primary lg:leading-7 leading-[18px] !w-full">
			{isLoading ? (
				<Button
					type="submit"
					onClick={handlelogout}
					className="bg-secondary border-secondary text-white"
					disabled={true}
				>
					<Loader2Icon className="animate-spin mr-1" />
					Logout
				</Button>
			) : (
				<Button
					type="submit"
					onClick={handlelogout}
					className="bg-white w-full hover:bg-primary rounded-md px-0 border border-border shadow-none outline-none hover:cursor-pointer text-primary font-medium hover:bg-secondary hover:border-secondary hover:text-white"
				>
					Logout
				</Button>
			)}
		</div>
	);
}
