export interface ProductDetail {
	id: number
	name: string
	sku: string
	price: number
	description: string
	image: string
}

export interface ProductDetailResponse {
	productDetail: ProductDetail | null
}
