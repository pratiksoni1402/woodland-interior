export const previousOrderKeys = {
	all: ['previous-orders'] as const,
	list: () => [...previousOrderKeys.all, 'list'] as const,
	detail: (orderId: string) => [...previousOrderKeys.all, orderId] as const,
}
