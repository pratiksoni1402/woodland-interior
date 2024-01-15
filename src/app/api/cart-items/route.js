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