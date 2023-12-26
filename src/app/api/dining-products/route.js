import prisma from "@/db";

export async function GET(request){
    let dining_sets = await prisma.diningproducts.findMany()
    console.log("Welcome from Dining Tables", {dining_sets})
    return Response.json({dining_sets})
}