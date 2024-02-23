export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
export async function GET(request, { params }) {
    let orderDetail = await prisma.orders.findUnique({
        where: {
            id: parseInt(params.id),
        },
        include: {
            orderitems: true,
        },
    });
    console.log("This will be displayed on previous orders", { orderDetail })
    return Response.json({ orderDetail })
}