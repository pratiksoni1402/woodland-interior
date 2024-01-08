import prisma from "@/db";
export async function POST(request, {params}){
    let requestBody = await request.json()
    let products = await prisma.bedroomproduct.findMany({
        where:{
            // sku: 'BED-VEL-MIN-6P',
            id: {
                in: requestBody.products
            },
        },
    })
    console.log("Product fetched", {products})
    return Response.json({products})

}