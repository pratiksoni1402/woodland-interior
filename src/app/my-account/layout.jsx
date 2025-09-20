import { getGreetingMessage } from '@/app/my-account/components/greetings';
import SideMenu from '@/app/my-account/components/side-menu';

import React from 'react';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
export default async function UserProfileLayout({ children }) {
	const session = await getSession();
	if (!session?.user_details) {
		return redirect('/auth/login');
	}
	const greetingMessage = getGreetingMessage();
	return (
		<div className="container-fluid">
			<div className="heading text-center font-crimson text-[#3c2f27] text-3xl py-5">
				<h1 className="capitalize md:text-4xl text-2xl">{greetingMessage}</h1>
			</div>

			<div className="grid grid-cols-12 gap-10 mb-20">
				<div className="lg:col-span-3 col-span-12 self-start lg:order-1 order-2 !sticky bg-white top-20 bottom-0">
					<div className="font-crimson text-lg ">
						<SideMenu />
					</div>
				</div>

				<div className="lg:col-span-9 col-span-12 min-h-[calc(100vh-300px)] lg:order-2 order-1">
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
}
