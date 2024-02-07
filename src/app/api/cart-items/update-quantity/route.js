import prisma from "@/db";
export async function PUT(request){
    let bodydata = await request.json()
    console.log("This is body data", bodydata)
    const updatequantity = await prisma.cartitems.update({
        where:{
            id: bodydata.id,
        },
        data:{
            quantity: bodydata.quantity,
        }
    })

    console.log("Hello from update quantity", {updatequantity})
    return Response.json({updatequantity})
}