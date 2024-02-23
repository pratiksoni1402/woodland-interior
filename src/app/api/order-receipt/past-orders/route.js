export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
export async function GET() {
    const getOrders = await prisma.orders.findMany({
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