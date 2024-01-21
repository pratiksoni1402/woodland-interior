import prisma from "@/db";
export async function POST(request){
    let record = await request.json()
    const savedproduct = await prisma.wishlist.create({
        data:{
            productid: record.id,
            sku: record.sku,
        },
    });
    console.log("Wishlist data in table", {savedproduct})
    return Response.json({savedproduct})
}