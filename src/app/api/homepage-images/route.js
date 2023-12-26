import prisma from "@/db";
export async function GET(request){
    let images = await prisma.homepage.findMany()
    console.log("Hello from homepage", {images})
    return Response.json({images})
}