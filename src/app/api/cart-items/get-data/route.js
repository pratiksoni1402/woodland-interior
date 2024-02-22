export const dynamic = 'force-dynamic';

import { getSessionId } from "@/lib/session";
import prisma from "@/db";

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




