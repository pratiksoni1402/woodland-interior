import { prisma } from "@/db"

export async function GET(request){
    let bproducts = await prisma.bedroomproduct.findMany()
    console.log("Hello From the product", {bproducts})
    return Response.json({bproducts})
}