import prisma from '@/db';

export async function POST(request) {
	try {
		const body = await request.json();
		const { searchKeyword } = body; // expects { "searchKeyword": "chair" }

		const searchProducts = await prisma.products.findMany({
			where: {
				OR: [
					{
						sku: {
							contains: searchKeyword,
						},
					},
					{
						name: {
							contains: searchKeyword,
						},
					},
					{
						description: {
							contains: searchKeyword,
						},
					},
				],
			},
		});

		return Response.json({ searchProducts });
	} catch (error) {
		console.error('Search Error:', error);
	}
}
