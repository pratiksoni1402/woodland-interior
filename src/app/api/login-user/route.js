import prisma from "@/db";
export async function POST(request){
    let details = await prisma.credentials.findFirst(
        {
            data:{
                email: login_detail.email,
                password: login_detail.password,
            },
        }
    )
    console.log("Hello from login data", {details})
    return Response.json({details}) 
}