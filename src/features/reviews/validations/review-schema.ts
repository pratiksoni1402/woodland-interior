import { z } from 'zod'

export const reviewSchema = z.object({
	rating: z
		.number({ error: (issue) => issue.input === undefined ? 'Please select a rating' : 'Rating must be a number' })
		.int()
		.min(1, 'Rating must be at least 1')
		.max(5, 'Rating cannot exceed 5'),
	title: z
		.string({ error: (issue) => issue.input === undefined ? 'Title is required' : 'Title must be a string' })
		.trim()
		.min(3, 'Title must be at least 3 characters')
		.max(100, 'Title cannot exceed 100 characters'),
	comment: z
		.string({ error: (issue) => issue.input === undefined ? 'Comment is required' : 'Comment must be a string' })
		.trim()
		.min(10, 'Comment must be at least 10 characters')
		.max(1000, 'Comment cannot exceed 1000 characters'),
})

export type ReviewFormValues = z.infer<typeof reviewSchema>
