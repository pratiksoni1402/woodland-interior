import prisma from "@/db";
export async function POST(request){
    let record = await request.json()
    const fromcart = await prisma.wishlist.create({
        data:{
            productid: record.productid,
            sku: record.sku,
            quantity: record.quantity,
        },
    });
    console.log("Wishlist data in table", {fromcart})
    return Response.json({fromcart})
}