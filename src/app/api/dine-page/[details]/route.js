import prisma from "@/db";
export async function GET(requset, {params}){
    let product_detail = await prisma.products.findUnique({
        where:{
            id: parseInt(params.details),
        },
    })
    console.log("Hello from dining product detail", {product_detail})
    return Response.json({product_detail})
}