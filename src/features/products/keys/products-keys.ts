export const productsKeys = {
	all: ['products'] as const,
	listings: () => [...productsKeys.all, 'listing'] as const,
	listing: (slug: string | null, price: string | null) =>
		[...productsKeys.listings(), slug, price] as const,
	categories: () => [...productsKeys.all, 'categories'] as const,
}
