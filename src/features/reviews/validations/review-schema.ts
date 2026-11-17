import { z } from 'zod'

export const reviewSchema = z.object({
	rating: z
		.number({ required_error: 'Please select a rating' })
		.int()
		.min(1, 'Rating must be at least 1')
		.max(5, 'Rating cannot exceed 5'),
	title: z
		.string({ required_error: 'Title is required' })
		.trim()
		.min(3, 'Title must be at least 3 characters')
		.max(100, 'Title cannot exceed 100 characters'),
	comment: z
		.string({ required_error: 'Comment is required' })
		.trim()
		.min(10, 'Comment must be at least 10 characters')
		.max(1000, 'Comment cannot exceed 1000 characters'),
})

export type ReviewFormValues = z.infer<typeof reviewSchema>
