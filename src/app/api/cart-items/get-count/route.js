export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0
import prisma from '@/db'
import { getSessionId } from '@/lib/session'
export async function GET() {
	const session = await getSessionId()
	const productcount = await prisma.cartitems.count({
		where: {
			sessionid: session,
		},
	})

	return Response.json({ productcount })
}
