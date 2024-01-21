import prisma from "@/db";
export async function GET(){
    const totalcount = await prisma.wishlist.count()
    console.log("Total product in wishlist", {totalcount})
    return Response.json({totalcount})
}