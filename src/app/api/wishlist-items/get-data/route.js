import prisma from "@/db";
export async function GET() {
    const getallproduct = await prisma.products.findMany({
        select: {
            id: true,
            // productid: true,
            sku: true,
            quantity: true,
            bedroomproduct: {
                select: {
                    name: true,
                    description: true,
                    price: true,
                    image: true,
                }
            },
        },
    });
    console.log("Products from wishlist table", { getallproduct })
    return Response.json({ getallproduct })
}