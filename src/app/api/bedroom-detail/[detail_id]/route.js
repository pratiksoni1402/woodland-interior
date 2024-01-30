import prisma from "@/db";
export async function GET(request, { params }) {

    let product_detail = await prisma.products.findUnique({
        where: {
            id: parseInt(params.detail_id),
        },
    })
    console.log("Hello from detail page", { product_detail })
    return Response.json({ product_detail })

}

