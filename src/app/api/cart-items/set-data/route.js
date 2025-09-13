// api/cart-items/set-data/route.js

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import prisma from '@/db';
import { getSessionId } from '@/lib/session';

export async function POST(request) {
	const sessionid = await getSessionId();
	const requestdata = await request.json();

	const { id, sku, quantity } = requestdata;

	// Check if product already exists in the cart for this session
	const existingItem = await prisma.cartitems.findFirst({
		where: {
			productid: id,
			sku: sku,
			sessionid: sessionid,
		},
	});

	let cartItem;

	if (existingItem) {
		// ✅ Update the quantity
		cartItem = await prisma.cartitems.update({
			where: { id: existingItem.id },
			data: {
				quantity: existingItem.quantity + quantity,
			},
		});
	} else {
		// ✅ Insert new item
		cartItem = await prisma.cartitems.create({
			data: {
				productid: id,
				sku,
				quantity: quantity,
				sessionid: sessionid,
			},
		});
	}

	console.log('Cart updated', { cartItem });
	return Response.json({ cartItem });
}
