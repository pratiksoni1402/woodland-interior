export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
import { getSessionId } from "@/lib/session";
export async function POST(request){
    let record = await request.json()
    const sessionId = await getSessionId();
    const savedproducts = await prisma.wishlist.create({
        data:{
            productid: record.id,
            sku: record.sku,
            quantity: record.quantity,
            sessionid: sessionId,
        },
    });
    console.log("Wishlist data in table with session id", {savedproducts})
    return Response.json({savedproducts})
}