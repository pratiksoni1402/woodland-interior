// This API will send the Product Id and sku to cart table
import prisma from "@/db";
import { getSessionId } from "@/lib/session";
export async function POST(request) {
    const sessionid = await getSessionId()
    let requestdata = await request.json()
    console.log(requestdata.productid)
    const cartproducts = await prisma.cartitems.create({
        data: {
            productid: requestdata.id,
            sku: requestdata.sku,
            quantity: requestdata.quantity,
            sessionid: sessionid,
        },
    });
    console.log("Data Posted in Cart Table", { cartproducts })
    return Response.json({ cartproducts })
}
// End