import prisma from "@/db";
export async function POST(request){
    const requestBody = await request.json()
    let wishlistProducts = await prisma.bedroomproduct.findMany({
        where:{
            id:{
                in: requestBody.wishlistProducts
            },
        },
    })
    console.log("Wishlist Products Fetched") 
}