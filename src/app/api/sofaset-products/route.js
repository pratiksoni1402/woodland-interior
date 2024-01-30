import prisma from "@/db";

export async function GET(request){
    let sofa_products = await prisma.products.findMany({
        where:{
            category_id: 3
        }
    })
    console.log("Hello From Sofa set Products", {sofa_products})
    return Response.json({sofa_products})
}