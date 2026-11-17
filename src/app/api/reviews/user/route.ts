import { NextRequest } from 'next/server'
import { getSession } from '@/lib/session'
import { getUserReviewForProduct } from '@/repository/review'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

// GET /api/reviews/user?productId=X
export async function GET(request: NextRequest) {
	try {
		const session = await getSession()

		if (!session?.user_details?.email) {
			return Response.json(
				{ error: 'You must be logged in' },
				{ status: 401 }
			)
		}

		const { searchParams } = new URL(request.url)
		const productId = parseInt(searchParams.get('productId') ?? '')

		if (isNaN(productId) || productId <= 0) {
			return Response.json(
				{ error: 'Valid productId is required' },
				{ status: 400 }
			)
		}

		const review = await getUserReviewForProduct(
			productId,
			session.user_details.email
		)

		return Response.json({ review: review ?? null })
	} catch (error) {
		console.error('Error fetching user review:', error)
		return Response.json(
			{ error: 'Failed to fetch user review' },
			{ status: 500 }
		)
	}
}
