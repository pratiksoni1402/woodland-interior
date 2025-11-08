export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { getSession } from '@/lib/session';
export async function POST() {
	const session = await getSession();
	let userstatus = 0;

	if (session?.user_details) {
		userstatus = 1;
	}
	return Response.json({ userstatus });
}
