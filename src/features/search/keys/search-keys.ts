export const searchKeys = {
	all: ['search'] as const,
	products: (keyword: string, price: string | null) =>
		[...searchKeys.all, 'products', keyword, price] as const,
};
