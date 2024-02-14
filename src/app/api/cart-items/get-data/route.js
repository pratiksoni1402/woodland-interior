import prisma from "@/db";
export const dynamic = 'force-dynamic'
import { getSessionId } from "@/lib/session";
export async function GET() {
    const sessionid = getSessionId()
    let cartdata = await prisma.cartitems.findMany({
        where: {
            sessionid: sessionid,
        },
        select: {
            id: true,
            productid: true,
            sku: true,
            quantity: true,
            products: {
                select: {
                    name: true,
                    description: true,
                    image: true,
                    price: true,
                },
            },
        },
    });
    console.log("Got it", { cartdata })
    return Response.json({ cartdata })

}
