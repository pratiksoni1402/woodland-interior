import prisma from "@/db";
export const dynamic = 'force-dynamic'
export async function GET() {
    let cartdata = await prisma.cartitems.findMany({
        select: {
            id: true,
            productid: true,
            sku: true,
            quantity: true,
            products: {
                select: {
                    name: true,
                    description: true,
                    image: true,
                    price: true,
                },
            },
        },
    });
    console.log("Got it", { cartdata })
    return Response.json({ cartdata })

}
