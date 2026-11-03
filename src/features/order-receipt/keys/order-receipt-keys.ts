export const orderReceiptKeys = {
	all: ['order-receipt'] as const,
	detail: (orderId: string) => [...orderReceiptKeys.all, orderId] as const,
}
