import { OrderReceiptView } from '@/features/order-receipt'

interface OrderReceiptPageProps {
	params: Promise<{ id: string }>
}

export default async function OrderReceiptPage({
	params,
}: OrderReceiptPageProps) {
	const { id } = await params

	return <OrderReceiptView orderId={id} />
}
