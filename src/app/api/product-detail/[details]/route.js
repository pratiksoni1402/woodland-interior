export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
export async function GET(request, { params }) {
    let productDetail = await prisma.products.findUnique({
        where: {
            id: parseInt(params.details),
        },
    })
    console.log("Hello from Product Detail Page", { productDetail })
    return Response.json({ productDetail })
    
}