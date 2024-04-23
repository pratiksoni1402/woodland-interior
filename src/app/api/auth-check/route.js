export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { getSession } from "@/lib/session";
export async function POST() {
    const session = await getSession();
    let userstatus = 0;

    if (session?.user_details) {
        userstatus = 1;
    }

    console.log('This is user status', userstatus);
    return Response.json({ userstatus });
}
