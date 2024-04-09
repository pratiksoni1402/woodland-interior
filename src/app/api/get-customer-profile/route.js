export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
import { getSession } from "@/lib/session";
export async function GET(){
    const sessionEmail = await getSession();
    const getprofile = await prisma.credentials.findFirst({
        where:{
            session_email: sessionEmail.user_details?.email,
        },
    })
    console.log("Reading from customer profile", {getprofile})
    return Response.json({getprofile})
}