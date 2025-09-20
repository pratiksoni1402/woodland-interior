import { getSession } from '@/lib/session';

export async function getGreetingMessage() {
	const session = await getSession();
	const now = new Date();

	// Setting time zone to IST
	const ISTTime = new Date(
		now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
	);

	const currentHour = ISTTime.getHours();

	let greeting;
	if (currentHour >= 4 && currentHour < 12) {
		greeting = 'Good morning';
	} else if (currentHour >= 12 && currentHour < 17) {
		greeting = 'Good afternoon';
	} else {
		greeting = 'Good evening';
	}

	return `${greeting}, ${session?.user_details?.firstname ?? ''}`;
}
