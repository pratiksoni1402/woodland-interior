import prisma from "@/db";
export const dynamic = 'force-dynamic'
export async function GET(requset, { params }) {
    let productDetail = await prisma.products.findUnique({
        where: {
            id: parseInt(params.details),
        },
    })
    console.log("Hello from Product Detail Page", { productDetail })
    return Response.json({ productDetail })
    
}