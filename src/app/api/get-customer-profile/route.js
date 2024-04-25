export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
import { getSession } from "@/lib/session";
export async function GET(){
    const session = await getSession();
    const getprofile = await prisma.credentials.findFirst({
        where:{
            session_email: session.user_details?.email,
        },
    })
    console.log("Reading from customer profile", {getprofile})
    return Response.json({getprofile})
}