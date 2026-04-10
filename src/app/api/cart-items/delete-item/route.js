export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0
import prisma from '@/db'

export async function POST(request) {
	const requestbody = await request.json()

	const deleteproduct = await prisma.cartitems.delete({
		where: {
			id: requestbody.id,
		},
	})

	return Response.json({ deleteproduct })
}
