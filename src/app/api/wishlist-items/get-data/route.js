export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0
import prisma from '@/db'
import { getSessionId } from '@/lib/session'
export async function GET() {
	const session = await getSessionId()
	const getallproduct = await prisma.wishlist.findMany({
		where: {
			sessionid: session,
		},
		include: {
			products: true,
		},
	})
	return Response.json({ getallproduct })
}
