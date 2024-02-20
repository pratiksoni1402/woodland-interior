import { getSessionId } from "@/lib/session"
export const dynamic = 'force-dynamic'
export async function GET(){
    const session = await getSessionId();
    const getprofile = await prisma.customerprofile.findFirst({
        where:{
            
            sessionid: session,
        },
    })
    console.log("Reading from customer profile", {getprofile})
    return Response.json({getprofile})
}