export const cartKeys = {
	all: ['cart'] as const,
	items: () => [...cartKeys.all, 'items'] as const,
	count: () => [...cartKeys.all, 'count'] as const,
};
