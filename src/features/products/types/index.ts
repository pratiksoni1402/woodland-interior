export interface Product {
	id: number
	name: string
	price: number
	image: string
	description?: string
	sku?: string
}

export interface ProductCategory {
	id: number
	name: string
	slug: string
	category: string
	heading: string
	image: string
}

export interface ProductListingCategory extends ProductCategory {
	products: Product[]
}

export interface ProductListingResponse {
	productlist: ProductListingCategory[]
}
