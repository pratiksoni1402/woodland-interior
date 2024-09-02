export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
export async function POST(request) {
    let requestbody = await request.json();
    const deleteitem = await prisma.wishlist.deleteMany({
        where: {
            id: requestbody.id,

        },
    });
    console.log('Product Deleted from wishlist', { deleteitem });
    return Response.json({ deleteitem })
}