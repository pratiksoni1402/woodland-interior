import prisma from '@/db'

export interface CreateReviewInput {
	productId: number
	customerEmail: string
	customerName: string
	rating: number
	title: string
	comment: string
}

export interface UpdateReviewInput {
	rating: number
	title: string
	comment: string
}

export interface ReviewWithPagination {
	reviews: Awaited<ReturnType<typeof prisma.review.findMany>>
	totalCount: number
	totalPages: number
	currentPage: number
}

export interface ReviewSummary {
	averageRating: number
	totalCount: number
	distribution: Record<number, number>
}

export async function getReviewsByProductId(
	productId: number,
	page: number = 1,
	limit: number = 5
): Promise<ReviewWithPagination> {
	const skip = (page - 1) * limit

	const [reviews, totalCount] = await Promise.all([
		prisma.review.findMany({
			where: { productId },
			orderBy: { createdAt: 'desc' },
			skip,
			take: limit,
		}),
		prisma.review.count({ where: { productId } }),
	])

	return {
		reviews,
		totalCount,
		totalPages: Math.ceil(totalCount / limit),
		currentPage: page,
	}
}

export async function getReviewSummaryByProductId(
	productId: number
): Promise<ReviewSummary> {
	const [aggregation, distribution] = await Promise.all([
		prisma.review.aggregate({
			where: { productId },
			_avg: { rating: true },
			_count: { id: true },
		}),
		prisma.review.groupBy({
			by: ['rating'],
			where: { productId },
			_count: { id: true },
		}),
	])

	const ratingDistribution: Record<number, number> = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	}

	for (const entry of distribution) {
		ratingDistribution[entry.rating] = entry._count.id
	}

	return {
		averageRating: aggregation._avg.rating ?? 0,
		totalCount: aggregation._count.id,
		distribution: ratingDistribution,
	}
}

export async function getUserReviewForProduct(
	productId: number,
	customerEmail: string
) {
	return prisma.review.findUnique({
		where: {
			productId_customerEmail: {
				productId,
				customerEmail,
			},
		},
	})
}

export async function createReview(data: CreateReviewInput) {
	return prisma.review.create({
		data: {
			productId: data.productId,
			customerEmail: data.customerEmail,
			customerName: data.customerName,
			rating: data.rating,
			title: data.title,
			comment: data.comment,
		},
	})
}

export async function updateReview(
	id: number,
	customerEmail: string,
	data: UpdateReviewInput
) {
	return prisma.review.update({
		where: {
			id,
			customerEmail,
		},
		data: {
			rating: data.rating,
			title: data.title,
			comment: data.comment,
		},
	})
}

export async function deleteReview(id: number, customerEmail: string) {
	return prisma.review.delete({
		where: {
			id,
			customerEmail,
		},
	})
}
