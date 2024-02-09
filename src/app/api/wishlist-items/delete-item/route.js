import prisma from "@/db";
export const dynamic = 'force-dynamic'
export async function POST(request) {
    let requestbody = await request.json();
    const deleteitem = await prisma.wishlist.deleteMany({
        where: {
            id: requestbody.id,

        },
    });
    console.log('Product Delted from wishlist', { deleteitem });
    return Response.json({ deleteitem })
}