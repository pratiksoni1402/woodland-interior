export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0
import prisma from '@/db'
import { getSession } from '@/lib/session'

export async function PUT(request) {
	const session = await getSession()

	const formdata = await request.json()
	let profile = await prisma.credentials.updateMany({
		where: {
			session_email: session.user_details?.email,
		},
		data: {
			firstname: formdata.firstname,
			lastname: formdata.lastname,
			addresslineone: formdata.addresslineone,
			addresslinetwo: formdata.addresslinetwo,
			country: formdata.country,
			state: formdata.state,
			city: formdata.city,
			phonenumber: formdata.phonenumber,
			pincode: parseInt(formdata.pincode),
		},
	})

	return Response.json({ profile })
}
