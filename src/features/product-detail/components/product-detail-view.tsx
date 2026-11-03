'use client'

import Image from 'next/image'
import { useState } from 'react'
import { IndianRupee, Loader2, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartMutations } from '@/features/cart'
import { useWishlist, useWishlistMutations } from '@/features/wishlist'
import { BLOB_BASE_URL } from '@/lib/blob'
import { showErrorToast } from '@/lib/toast'
import type { ProductDetail } from '../types'
import { DeliveryInfo } from './delivery-info'
import Reviews from '@/features/customer-reviews/page'

interface ProductDetailViewProps {
	product: ProductDetail
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
	const [quantity, setQuantity] = useState(1)
	const wishlistQuery = useWishlist()
	const cartMutations = useCartMutations()
	const wishlistMutations = useWishlistMutations()
	const wishlistItem = wishlistQuery.data?.find(
		(item) => item.productid === product.id
	)

	const addToCart = () => {
		cartMutations.addItem({
			id: product.id,
			sku: product.sku,
			quantity,
		})
	}

	const toggleWishlist = () => {
		if (wishlistItem) {
			wishlistMutations.removeItem(wishlistItem.id)
			return
		}

		wishlistMutations.addItem({
			id: product.id,
			sku: product.sku,
			quantity,
		})
	}

	const incrementQuantity = () => {
		if (quantity >= 10) {
			showErrorToast('Only 10 Sets are allowed to buy')
			return
		}
		setQuantity((value) => value + 1)
	}

	return (
		<div className="product-detail-page">
			<div className="container">
				<div className="product-wrapper py-10">
					<div className="grid grid-cols-12 gap-7">
						<div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-5 col-span-12">
							<div className="left-section">
								<div className="product-image relative">
									<Image
										src={`${BLOB_BASE_URL}/${product.image}`}
										alt={product.name}
										width={227}
										height={227}
										quality={100}
										priority
										className="max-w-full min-w-full"
									/>
								</div>
							</div>
						</div>
						<div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-7 col-span-12">
							<div className="right-section">
								<div className="detail-wrapper">
									<div className="variation font-roboto text-sm text-primary pb-2">
										<span className="caption">SKU:</span>
										<span className="value">{product.sku}</span>
									</div>
									<h1 className="product-name text-primary font-semibold font-crimson text-2xl pb-2">
										{product.name}
									</h1>
									<div className="description text-primary text-sm pb-2 font-roboto">
										{product.description}
									</div>
									<div className="pricing flex items-center text-primary font-semibold font-crimson text-lg">
										<IndianRupee width={18} />
										<span>{product.price * quantity}</span>
										<span className="text-xs px-1">
											(inclusive of all taxes)
										</span>
									</div>
								</div>
								<div className="actions">
									<div className="quantity py-3">
										<div className="pb-1 text-xs text-primary font-roboto">
											Quantity:
										</div>
										<div className="flex items-center">
											<Button
												type="button"
												aria-label="Increase quantity"
												onClick={incrementQuantity}
												variant="outline"
												className="border-primary hover:cursor-pointer border text-lg bg-primary text-white w-[26px] h-[26px] rounded-full px-0 py-0 hover:bg-secondary hover:border-secondary hover:text-white"
											>
												<Plus />
											</Button>
											<span className="px-4 font-roboto font-bold text-primary h-10 flex items-center">
												{quantity}
											</span>
											<Button
												type="button"
												aria-label="Decrease quantity"
												onClick={() =>
													setQuantity((value) => Math.max(value - 1, 1))
												}
												variant="outline"
												className="border-primary hover:cursor-pointer border text-lg bg-primary text-white w-[26px] h-[26px] rounded-full px-0 py-0 hover:bg-secondary hover:border-secondary hover:text-white"
											>
												<Minus />
											</Button>
										</div>
									</div>
									<DeliveryInfo />
									<div className="flex sm:flex-nowrap flex-wrap sm:gap-3 gap-">
										<div className="cart py-3 w-full">
											<Button
												type="button"
												onClick={addToCart}
												disabled={cartMutations.isAdding}
												variant="outline"
												className="text-sm w-full font-roboto hover:cursor-pointer text-white bg-primary hover:text-background hover:bg-secondary border-primary hover:border-secondary rounded-md"
											>
												{cartMutations.isAdding ? (
													<Loader2 className="mr-1 animate-spin" />
												) : null}
												Add To Bag
											</Button>
										</div>
										<div className="wishlist py-3 w-full">
											<Button
												type="button"
												onClick={toggleWishlist}
												disabled={
													wishlistQuery.isLoading ||
													wishlistQuery.isError ||
													wishlistMutations.isAdding ||
													wishlistMutations.isDeleting
												}
												variant="outline"
												className="text-sm w-full font-roboto text-primary hover:bg-secondary hover:text-background bg-transparent border-primary hover:border-secondary hover:cursor-pointer rounded-md"
											>
												{wishlistMutations.isAdding ||
												wishlistMutations.isDeleting ? (
													<Loader2 className="mr-1 animate-spin" />
												) : null}
												{wishlistItem
													? 'Remove from Wishlist'
													: 'Add To Wishlist'}
											</Button>
											{wishlistQuery.isError && (
												<div
													className="mt-2 text-sm text-destructive"
													role="alert"
												>
													Unable to load wishlist status.{' '}
													<button
														type="button"
														className="underline"
														onClick={() => void wishlistQuery.refetch()}
													>
														Try again
													</button>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="customer-reviews">
					<Reviews />
				</div>
			</div>
		</div>
	)
}
