import prisma from "@/db";
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

// Using Zustand 
// import prisma from "@/db";
// export async function POST(request) {
//    let requestBody = await request.json()
//    let products = await prisma.bedroomproduct.findMany({
//       where: {
//          id: {
//             in: requestBody.products
//          },
//       },
//    })
//    console.log("Product fetched", { products })
//    return Response.json({ products })
// }