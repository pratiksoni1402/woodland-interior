export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
import { getSession } from "@/lib/session";
export async function GET() {
    const sessionEmail = await getSession();
    const getOrders = await prisma.orders.findMany({
        where:{
            session_email: sessionEmail.user_details?.email
        },
        select: {
            id: true,
            payment_mode: true,
            order_date: true,
            total: true,
        },
    });
    console.log("This will shoe orders on account", { getOrders })
    return Response.json({ getOrders })
}