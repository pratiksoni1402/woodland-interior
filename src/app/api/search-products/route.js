import prisma from '@/db';

export async function POST(request) {
	try {
		const body = await request.json();
		const { searchKeyword, filterByPrice } = body;
		console.log('SK', searchKeyword);
		console.log('FBP', filterByPrice);
		// Example body:
		// { "searchKeyword": "chair", "filterByPrice": "hightolow" }

		const searchProducts = await prisma.products.findMany({
			where: {
				OR: [
					{ sku: { contains: searchKeyword } },
					{ name: { contains: searchKeyword } },
					{ description: { contains: searchKeyword } },
				],
			},
			orderBy:
				filterByPrice === 'hightolow'
					? { price: 'desc' }
					: filterByPrice === 'lowtohigh'
						? { price: 'asc' }
						: undefined, // 👈 no sorting if "reset" or not passed
		});

		return Response.json({ searchProducts });
	} catch (error) {
		console.error('Search Error:', error);
		return new Response(JSON.stringify({ error: 'Something went wrong' }), {
			status: 500,
		});
	}
}
