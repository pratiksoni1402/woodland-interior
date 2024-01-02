import prisma from "@/db";

export async function GET(request){
    let stateList = await prisma.indianstates.findMany()
    console.log("Hello From India", { stateList })
    return Response.json({stateList})
}