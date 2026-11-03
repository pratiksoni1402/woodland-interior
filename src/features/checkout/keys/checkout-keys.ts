export const checkoutKeys = {
	all: ['checkout'] as const,
	countries: () => [...checkoutKeys.all, 'countries'] as const,
}
