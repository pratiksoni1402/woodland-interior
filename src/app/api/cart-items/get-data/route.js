import prisma from "@/db";
import { getSessionId } from "@/lib/session";
import { PrismaClient } from '@prisma/client';
export const dynamic = 'force-dynamic';
export async function GET() {
  const sessionid = await getSessionId();
  console.log('This is session id', sessionid)
  // const prisma = new PrismaClient({
  //   log: ['query', 'info', 'error', 'warn']
  // })
  let cartdata = await prisma.cartitems.findMany({
    where: {
      sessionid: sessionid,
    },
    include: {
      // id: true,
      products: true,
      // sku: true,
      // quantity: true,
    },
    // select: {
    //   id: true,
    //   productid: true,
    //   sku: true,
    //   quantity: true,
    //   products: {
    //     select: {
    //       name: true,
    //       description: true,
    //       image: true,
    //       price: true,
    //     },
    //   },
    // },
  });
  console.log("Got it", { cartdata });
  return Response.json({ cartdata });
}




