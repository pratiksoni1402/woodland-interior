// This API will send the Product Id and sku to cart table
import prisma from "@/db";
export async function POST(request) {
    let requestdata = await request.json()
    const cartproduct = await prisma.cartitems.create({
        data: {
            productid: requestdata.productid,
            sku: requestdata.sku,
            quantity: requestdata.quantity,
        },
    });
    console.log("Data Posted in Cart Table", { cartproduct })
    return Response.json({ cartproduct })
}
// End