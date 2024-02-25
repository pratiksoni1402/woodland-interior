export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
import { getSessionId } from "@/lib/session";
export async function GET(){
    const session = await getSessionId();
    const shippingDetails = await prisma.orders.findFirst({
        where:{
            
        }
    })
}