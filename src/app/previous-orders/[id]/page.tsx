import { PreviousOrderDetailView } from '@/features/previous-orders'

interface PreviousOrderPageProps {
	params: Promise<{ id: string }>
}

export default async function PreviousOrderPage({
	params,
}: PreviousOrderPageProps) {
	const { id } = await params
	return <PreviousOrderDetailView orderId={id} />
}
