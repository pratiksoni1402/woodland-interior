export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
export async function POST(request, {params}){
    console.log("this is server isde params", {params})
    const orderReceipt = await prisma.orders.findUnique({
        where:{
            id: parseInt(params.orderid),
        },
        include:{
            orderitems: true,
        },
    })
    console.log("This is the receipt", {orderReceipt});
    return Response.json({orderReceipt});
}