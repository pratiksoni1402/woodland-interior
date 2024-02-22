// export const dynamic = 'force-dynamic';
// export const revalidate = 0;
// import prisma from "@/db";
// import { getSessionId } from "@/lib/session";
// export async function POST() {
//     const session = getSessionId();
//     const clearCart = await prisma.cartitems.deleteMany({
//         where: {
//             sessionid: session,
//         },
//     })
//     console.log("Cart Cleared", { clearCart })
//     return Response.json({ clearCart })
// }