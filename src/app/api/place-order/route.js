import prisma from "@/db";
import { getSessionId } from "@/lib/session";
export async function POST(request) {
    const requestbody = await request.json();
    const sessionid = await getSessionId();
    let cartdata = await prisma.cartitems.findMany({
        where: {
            sessionid: sessionid,
        },
        include: {
            products: true,
        },
    });



}