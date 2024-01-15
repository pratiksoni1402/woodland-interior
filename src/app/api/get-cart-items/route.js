// // Using Database
// import prisma from "@/db"
// export async function POST(request){
//     let requestBody = await request.json()
//     let products = await prisma.cartitems.findMany({
//         where:{
//             id:{
//                 in: requestBody.products
//             },
//         },
//     })
//     console.log("Products In Cart ", {products})
//     return Response.json({products})
// }