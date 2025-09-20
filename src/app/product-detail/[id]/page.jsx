import ProductDetails from '@/app/product-detail/components/product';

export async function generateMetadata({ params }) {
	const { id } = params;
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

	const res = await fetch(`${baseUrl}api/product-detail/${id}`);
	const { productDetail } = await res.json();

	return {
		title: productDetail.name,
		description: productDetail.description,
	};
}

export default async function ProductDetailPage({ params }) {
	const { id } = await params;
	console.log('dfdd', id);
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
	//Fetch Product Detail
	const res = await fetch(`${baseUrl}api/product-detail/${id}`);
	const { productDetail } = await res.json();
	console.log('server pd', productDetail.name);
	return (
		<div>
			<ProductDetails data={productDetail} />
		</div>
	);
}
