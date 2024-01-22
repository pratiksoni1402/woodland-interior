import prisma from "@/db";
export async function POST(request){
    let requestbody = await request.json();
    const deleteitem = await prisma.wishlist.delete({
        where:{
            id: requestbody.id,
        },
    });
    console.log('Product Delted from wishlist', {deleteitem});
    return Response.json({deleteitem})
}