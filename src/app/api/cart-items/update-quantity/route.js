export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0
import prisma from '@/db'
export async function PUT(request) {
	let bodydata = await request.json()

	const updatequantity = await prisma.cartitems.update({
		where: {
			id: bodydata.id,
		},
		data: {
			quantity: bodydata.quantity,
		},
	})

	return Response.json({ updatequantity })
}
