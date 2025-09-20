import prisma from '@/db';
export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const slug = searchParams.get('slug');
	const price = searchParams.get('price');
	console.log('Slug, Price', slug);
	console.log('Price', price);
	let productlist = await prisma.category.findMany({
		where: {
			slug: slug,
		},
		include: {
			products: {
				orderBy:
					price === 'hightolow'
						? { price: 'desc' }
						: price === 'lowtohigh'
							? { price: 'asc' }
							: undefined,
			},
		},
	});
	return Response.json({ productlist });
}
