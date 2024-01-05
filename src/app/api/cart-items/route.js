import prisma from "@/db";
export async function POST(request, {params}){
    let products = await prisma.bedroomproduct.findMany({
        where:{
            // sku: 'BED-VEL-MIN-6P',
            id: {
                in: [8]
            },
        },
    })
    console.log("Product fetched", {products})
    return Response.json({products})

}