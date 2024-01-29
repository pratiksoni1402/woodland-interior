import { prisma } from "@/db"

export async function GET(request){
    let bedroom_products = await prisma.products.findMany({
        where:{
            category_id: 1
        }
    })
    console.log("Hello From the product", {bedroom_products})
    return Response.json({bedroom_products})
}