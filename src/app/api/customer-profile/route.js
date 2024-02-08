import prisma from "@/db";
export const dynamic = 'force-dynamic'
export async function POST(request) {
    const formdata = await request.json() 
    let profile = await prisma.customerprofile.create(
        {
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