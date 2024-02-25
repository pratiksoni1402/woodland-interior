export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { getSessionId } from "@/lib/session";
import { getSession } from "@/lib/session";
export async function GET(){
    const session = await getSessionId();
    const sessionEmail = await getSession();
    const getprofile = await prisma.customerprofile.findFirst({
        where:{
            session_email: sessionEmail.user_details?.email,
        },
    })
    console.log("Reading from customer profile", {getprofile})
    return Response.json({getprofile})
}