import { NextResponse } from 'next/server';
import prisma from '@/db';

// GET /api/categories
export async function GET() {
	try {
		const categories = await prisma.category.findMany({
			select: {
				id: true,
				name: true,
				slug: true,
				category: true,
				heading: true,
				image: true,
			},
		});

		return NextResponse.json(categories, { status: 200 });
	} catch (error) {
		console.error('Error fetching categories:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch categories' },
			{ status: 500 }
		);
	}
}
