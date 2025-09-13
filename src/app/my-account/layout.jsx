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

			<div className="grid grid-cols-12 gap-5">
				<div className="col-span-3 self-start">
					<div className="sticky top-5 font-crimson text-lg">
						<SideMenu />
					</div>
				</div>

				<div className="col-span-9 min-h-[calc(100vh-300px)]">
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
}
