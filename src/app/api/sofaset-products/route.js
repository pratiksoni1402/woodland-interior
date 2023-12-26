import prisma from "@/db";

export async function GET(request){
    let sofa_products = await prisma.sofasetproducts.findMany()
    console.log("Hello From Sofa set Products", {sofa_products})
    return Response.json({sofa_products})
}