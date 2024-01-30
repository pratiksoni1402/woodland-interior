import prisma from "@/db";

export async function GET(request, {params}){
    let product_detail = await prisma.products.findUnique({
        where:{
            id: parseInt(params.details),
        },
    })
    console.log("Hello from sofa details", {product_detail})
    return Response.json({product_detail})
}