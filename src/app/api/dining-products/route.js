import prisma from "@/db";

export async function GET(request){
    let dining_sets = await prisma.products.findMany({
        where:{
            category_id: 2
        }
    })
    console.log("Welcome from Dining Tables", {dining_sets})
    return Response.json({dining_sets})
}