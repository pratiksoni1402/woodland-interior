import prisma from "@/db";
export async function POST(request){
    let record = await request.json()
    const savedproducts = await prisma.wishlist.create({
        data:{
            productid: record.id,
            sku: record.sku,
            quantity: record.quantity,
        },
    });
    console.log("Wishlist data in table", {savedproducts})
    return Response.json({savedproducts})
}