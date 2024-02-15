import prisma from "@/db";
export const dynamic = 'force-dynamic'
import { getSessionId } from "@/lib/session";
export async function GET(){
    const session = await getSessionId();
    const totalcount = await prisma.wishlist.count({
        where:{
            sessionid:session,
        },
    });
    console.log("Total product in wishlist", {totalcount});
    return Response.json({totalcount})
}