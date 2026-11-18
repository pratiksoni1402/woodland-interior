import { NextRequest } from 'next/server'
import { getSession } from '@/lib/session'
import { reviewSchema } from '@/features/reviews/validations/review-schema'
import {
	getReviewsByProductId,
	createReview,
	updateReview,
	deleteReview,
} from '@/repository/review'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

// GET /api/reviews?productId=X&page=1&limit=5
export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url)
		const productId = parseInt(searchParams.get('productId') ?? '')
		const page = parseInt(searchParams.get('page') ?? '1')
		const limit = Math.min(parseInt(searchParams.get('limit') ?? '5'), 20)

		if (isNaN(productId) || productId <= 0) {
			return Response.json(
				{ error: 'Valid productId is required' },
				{ status: 400 }
			)
		}

		const result = await getReviewsByProductId(
			productId,
			Math.max(page, 1),
			Math.max(limit, 1)
		)

		return Response.json(result)
	} catch (error) {
		console.error('Error fetching reviews:', error)
		return Response.json(
			{ error: 'Failed to fetch reviews' },
			{ status: 500 }
		)
	}
}

// POST /api/reviews
export async function POST(request: NextRequest) {
	try {
		const session = await getSession()

		if (!session?.user_details?.email) {
			return Response.json(
				{ error: 'You must be logged in to write a review' },
				{ status: 401 }
			)
		}

		const body = await request.json()
		const { productId, ...reviewData } = body

		if (!productId || isNaN(parseInt(productId))) {
			return Response.json(
				{ error: 'Valid productId is required' },
				{ status: 400 }
			)
		}

		const validation = reviewSchema.safeParse(reviewData)
		if (!validation.success) {
			return Response.json(
				{
					error: 'Validation failed',
					details: validation.error.flatten().fieldErrors,
				},
				{ status: 400 }
			)
		}

		const customerName = `${session.user_details.firstname ?? ''} ${session.user_details.lastname ?? ''}`.trim()

		const review = await createReview({
			productId: parseInt(productId),
			customerEmail: session.user_details.email,
			customerName: customerName || 'Anonymous',
			rating: validation.data.rating,
			title: validation.data.title,
			comment: validation.data.comment,
		})

		return Response.json({ review }, { status: 201 })
	} catch (error: any) {
		if (error?.code === 'P2002') {
			return Response.json(
				{ error: 'You have already reviewed this product' },
				{ status: 409 }
			)
		}
		console.error('Error creating review:', error)
		return Response.json(
			{ error: 'Failed to create review' },
			{ status: 500 }
		)
	}
}

// PUT /api/reviews
export async function PUT(request: NextRequest) {
	try {
		const session = await getSession()

		if (!session?.user_details?.email) {
			return Response.json(
				{ error: 'You must be logged in to update a review' },
				{ status: 401 }
			)
		}

		const body = await request.json()
		const { id, ...reviewData } = body

		if (!id || isNaN(parseInt(id))) {
			return Response.json(
				{ error: 'Valid review id is required' },
				{ status: 400 }
			)
		}

		const validation = reviewSchema.safeParse(reviewData)
		if (!validation.success) {
			return Response.json(
				{
					error: 'Validation failed',
					details: validation.error.flatten().fieldErrors,
				},
				{ status: 400 }
			)
		}

		const review = await updateReview(
			parseInt(id),
			session.user_details.email,
			{
				rating: validation.data.rating,
				title: validation.data.title,
				comment: validation.data.comment,
			}
		)

		return Response.json({ review })
	} catch (error: any) {
		if (error?.code === 'P2025') {
			return Response.json(
				{ error: 'Review not found or you are not the author' },
				{ status: 404 }
			)
		}
		console.error('Error updating review:', error)
		return Response.json(
			{ error: 'Failed to update review' },
			{ status: 500 }
		)
	}
}

// DELETE /api/reviews
export async function DELETE(request: NextRequest) {
	try {
		const session = await getSession()

		if (!session?.user_details?.email) {
			return Response.json(
				{ error: 'You must be logged in to delete a review' },
				{ status: 401 }
			)
		}

		const body = await request.json()
		const { id } = body

		if (!id || isNaN(parseInt(id))) {
			return Response.json(
				{ error: 'Valid review id is required' },
				{ status: 400 }
			)
		}

		await deleteReview(parseInt(id), session.user_details.email)

		return Response.json({ message: 'Review deleted successfully' })
	} catch (error: any) {
		if (error?.code === 'P2025') {
			return Response.json(
				{ error: 'Review not found or you are not the author' },
				{ status: 404 }
			)
		}
		console.error('Error deleting review:', error)
		return Response.json(
			{ error: 'Failed to delete review' },
			{ status: 500 }
		)
	}
}
