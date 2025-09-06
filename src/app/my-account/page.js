import React from 'react';

export default async function MyAccount() {
	return (
		<>
			<div className="activity sm:order-1 order-2 sm:mt-0 mt-4">
				<div className="font-roboto pb-2 text-[#3c2f27] font-semibold text-sm">
					You can do following things in you account.
				</div>
				<ul className="list-disc list-inside font-roboto">
					<li className="text-sm text-[#3c2f27]">Edit your Profile</li>
					<li className="text-sm text-[#3c2f27]">View your wishlist</li>
					<li className="text-sm text-[#3c2f27]">
						Your Previous Order History
					</li>
					<li className="text-sm text-[#3c2f27]">Password Updation</li>
				</ul>
			</div>
		</>
	);
}
