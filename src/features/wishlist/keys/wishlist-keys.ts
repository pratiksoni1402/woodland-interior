export const wishlistKeys = {
	all: ['wishlist'] as const,
	items: () => [...wishlistKeys.all, 'items'] as const,
	count: () => [...wishlistKeys.all, 'count'] as const,
};
