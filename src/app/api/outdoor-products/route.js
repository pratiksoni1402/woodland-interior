import prisma from "@/db";

export async function GET(request){
    let backyard_products = await prisma.products.findMany({
        where:{
            category_id: 4
        }
    })
    console.log("Hello from backyard products", {backyard_products})
    return Response.json({backyard_products})
}