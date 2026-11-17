export interface ReviewItem {
	id: number
	productId: number
	customerEmail: string
	customerName: string
	rating: number
	title: string
	comment: string
	createdAt: string
	updatedAt: string
}

export interface ReviewListResponse {
	reviews: ReviewItem[]
	totalCount: number
	totalPages: number
	currentPage: number
}

export interface ReviewSummaryResponse {
	averageRating: number
	totalCount: number
	distribution: Record<number, number>
}

export interface CreateReviewPayload {
	productId: number
	rating: number
	title: string
	comment: string
}

export interface UpdateReviewPayload {
	id: number
	rating: number
	title: string
	comment: string
}
