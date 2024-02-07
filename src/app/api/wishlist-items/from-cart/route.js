import prisma from "@/db";
import { getSessionId } from "@/lib/session";
export async function POST(request){
    const cartsession = await getSessionId();
    let record = await request.json()
    const fromcart = await prisma.wishlist.create({
        data:{
            productid: record.productid,
            sku: record.sku,
            quantity: record.quantity,
            sessionid: cartsession,
        },
    });
    console.log("Wishlist data in table", {fromcart})
    return Response.json({fromcart})
}