import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductDetail, ProductDetailView } from '@/features/product-detail'

interface ProductDetailPageProps {
	params: Promise<{ id: string }>
}

export async function generateMetadata({
	params,
}: ProductDetailPageProps): Promise<Metadata> {
	const { id } = await params
	const productDetail = await getProductDetail(id)
	if (!productDetail) {
		return { title: 'Product not found' }
	}

	return {
		title: productDetail.name,
		description: productDetail.description,
	}
}

export default async function ProductDetailPage({
	params,
}: ProductDetailPageProps) {
	const { id } = await params
	const productDetail = await getProductDetail(id)
	if (!productDetail) notFound()

	return <ProductDetailView product={productDetail} />
}
