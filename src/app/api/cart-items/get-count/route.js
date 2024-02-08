import prisma from "@/db";
export const dynamic = 'force-dynamic'
export async function GET(){
    const productcount = await prisma.cartitems.count();
    console.log("Total Products in Cart is", {productcount})
    return Response.json({productcount})
}