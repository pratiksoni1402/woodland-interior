import prisma from "@/db";
import { getSessionId } from "@/lib/session";
export const dynamic = 'force-dynamic';
export async function GET() {
  const sessionid = await getSessionId();
  let cartdata = await prisma.cartitems.findMany({
    where: {
      sessionid: sessionid,
    },
    include: {
      products: true,
    },
  });
  return Response.json({ cartdata });
}




