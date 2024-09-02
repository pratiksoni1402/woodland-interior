export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    console.log('Hello Slug', slug)
    let productlist = await prisma.category.findMany({
        where: {
            slug: slug,
        },
        include: {
            products: true,
        },
    })
    console.log('All Products', { productlist });
    return Response.json({ productlist });

}