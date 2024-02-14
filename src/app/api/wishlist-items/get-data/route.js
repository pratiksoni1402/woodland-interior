import prisma from "@/db";
export const dynamic = 'force-dynamic'
import { getSessionId } from "@/lib/session";
export async function GET() {
    const session = await getSessionId();
    console.log("This is session id from wishlist", session)
    const getallproduct = await prisma.wishlist.findMany({
        where:{
            sessionid: session,
        },
        include:{
            products:true,
        },
        // select: {
        //     id: true,
        //     productid: true,
        //     sku: true,
        //     quantity: true,
        //     products: {
        //         select: {
        //             name: true,
        //             description: true,
        //             price: true,
        //             image: true,
        //         }
        //     },
        // },
    });
    console.log("Products from wishlist table", { getallproduct })
    return Response.json({ getallproduct })
}