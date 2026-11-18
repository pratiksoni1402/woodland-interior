import { NextRequest } from 'next/server'
import { getReviewSummaryByProductId } from '@/repository/review'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

// GET /api/reviews/summary?productId=X
export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url)
		const productId = parseInt(searchParams.get('productId') ?? '')

		if (isNaN(productId) || productId <= 0) {
			return Response.json(
				{ error: 'Valid productId is required' },
				{ status: 400 }
			)
		}

		const summary = await getReviewSummaryByProductId(productId)
		return Response.json(summary)
	} catch (error) {
		console.error('Error fetching review summary:', error)
		return Response.json(
			{ error: 'Failed to fetch review summary' },
			{ status: 500 }
		)
	}
}
