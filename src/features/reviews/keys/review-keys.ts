export const reviewKeys = {
	all: ['reviews'] as const,
	list: (productId: number) =>
		[...reviewKeys.all, 'list', productId] as const,
	summary: (productId: number) =>
		[...reviewKeys.all, 'summary', productId] as const,
	user: (productId: number) =>
		[...reviewKeys.all, 'user', productId] as const,
}
