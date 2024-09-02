export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { getSession } from "@/lib/session"
export async function POST() {
    const session = await getSession();
    if (session?.user_details) {
        session.user_details = null
    }
    await session.save()
    return Response.json({session})
}