import prisma from "@/db";
export async function POST(request){
    let requestbody = await request.json();
    const deleteitem = await prisma.wishlist.deleteMany({
        where:{
            productid: requestbody.productid,
            productid: requestbody.id,
        },
    });
    console.log('Product Delted from wishlist', {deleteitem});
    return Response.json({deleteitem})
}