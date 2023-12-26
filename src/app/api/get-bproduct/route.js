import { prisma } from "@/db"

export async function GET(request){
    let bedroom_products = await prisma.bedroomproduct.findMany()
    console.log("Hello From the product", {bedroom_products})
    return Response.json({bedroom_products})
}