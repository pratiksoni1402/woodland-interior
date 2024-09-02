export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
import { getSessionId } from "@/lib/session";
export async function POST(request){
    let record = await request.json()
    let sessionid = await getSessionId()
    const fromwishlist = await prisma.cartitems.create({
        data:{
            productid: record.productid,
            sku: record.sku,
            quantity: record.quantity,
            sessionid: sessionid,
            
        },
    });
    console.log("Wishlist data in table", {fromwishlist})
    return Response.json({fromwishlist})
}