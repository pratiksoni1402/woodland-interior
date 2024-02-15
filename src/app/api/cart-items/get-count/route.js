import prisma from "@/db";
export const dynamic = 'force-dynamic'
import { getSessionId } from "@/lib/session";
export async function GET(){
    const session = await getSessionId();
    const productcount = await prisma.cartitems.count({
        where:{
            sessionid: session,
        },
    });
    console.log("Total Products in Cart is", {productcount})
    return Response.json({productcount})
}