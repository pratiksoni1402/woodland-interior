import prisma from "@/db";
export async function GET(request){
    let { searchParams} = new URl(request.url)
    const slug = searchParams.get('slug')
    let totalproducts = await prisma.category.count({
        where: {
            slug: slug,
        },
        include: {
            products: true,
        },
    })
    console.log('All Products', { totalproducts });
    return Response.json({ totalproducts });
}