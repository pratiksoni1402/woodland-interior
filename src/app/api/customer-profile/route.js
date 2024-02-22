export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
import { getSessionId } from "@/lib/session";
export async function PUT(request) {
    const session = await getSessionId();
    const formdata = await request.json() 
    let profile = await prisma.customerprofile.updateMany(
        {
            where:{
                sessionid: session,    
            },
            data:{
                firstname: formdata.firstname,
                lastname: formdata.lastname,
                email: formdata.email,
                addresslineone: formdata.addresslineone,
                addresslinetwo: formdata.addresslinetwo,
                country: formdata.country,
                state: formdata.state,
                city: formdata.city,
                phonenumber: parseInt(formdata.phonenumber),
                pincode: parseInt(formdata.pincode),
            },
        }
    )
    console.log("Hello from customer profile", {profile})
    return Response.json({profile})
}