import prisma from "@/db";
export const dynamic = 'force-dynamic'
export async function POST(request) {
    const requestbody = await request.json();
    console.log(requestbody)
    const deleteproduct = await prisma.cartitems.delete({
        where: {
            id: requestbody.id,
        },
    })
    console.log("Product Deleted", { deleteproduct })
    return Response.json({ deleteproduct })
}