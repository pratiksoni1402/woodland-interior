import prisma from "@/db";
export async function POST(request, {params}){
    let product = await prisma.bedroomproduct.findUnique({
        where:{
            // sku: 'BED-VEL-MIN-6P',
            id: 5,
        },
    })
    console.log("Product fetched", {product})
    return Response.json({product})

}