import prisma from "@/db";
export async function POST(request){
    let record = await request.json()
    const fromwishlist = await prisma.cartitems.create({
        data:{
            productid: record.productid,
            sku: record.sku,
            quantity: record.quantity,
        },
    });
    console.log("Wishlist data in table", {fromwishlist})
    return Response.json({fromwishlist})
}