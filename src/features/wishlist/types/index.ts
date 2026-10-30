export interface WishlistProduct {
	id: number;
	name: string;
	price: number;
	description?: string;
	image: string;
	sku?: string;
}

export interface WishlistItem {
	id: number;
	session_id?: string;
	productid: number;
	sku: string;
	quantity: number;
	products: WishlistProduct;
}
