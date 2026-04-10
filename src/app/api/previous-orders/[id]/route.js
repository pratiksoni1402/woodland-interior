export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0
import prisma from '@/db'
export async function GET(request, props) {
	const params = await props.params
	let orderDetail = await prisma.orders.findUnique({
		where: {
			id: parseInt(params.id),
		},
		include: {
			orderitems: true,
		},
	})

	return Response.json({ orderDetail })
}
