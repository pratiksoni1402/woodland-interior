export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
import { getSession } from "@/lib/session";
import { getSessionId } from "@/lib/session";
export async function PUT(request) {
    const sessionMail = await getSession();
    console.log('This is session Email', sessionMail.user_details?.email)
    const session = await getSessionId();
    const formdata = await request.json() 
    let profile = await prisma.customerprofile.updateMany(
        {
            where:{
                session_email: sessionMail.user_details?.email,    
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
                phonenumber: formdata.phonenumber,
                pincode: parseInt(formdata.pincode),
            },
        }
    )
    console.log("Hello from customer profile", {profile})
    return Response.json({profile})
}