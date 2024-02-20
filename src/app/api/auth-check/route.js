import { getSession } from "@/lib/session";

export const dynamic = 'force-dynamic';

export async function POST() {
    const session = await getSession();
    let status = 0;

    if (session?.user_details) {
        status = 1;
    }

    console.log('This is session', session);
    return Response.json({ status, session });
}
