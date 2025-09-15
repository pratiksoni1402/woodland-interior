'use client';
import Image from 'next/image';
import { IndianRupee } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { BLOB_BASE_URL } from '@/app/_lib/constants/blob';

import { useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
export default function UsersWishlist() {
	const queryClient = useQueryClient();
	const [toCart, setToCart] = useState(null);
	const [itemDelete, setItemDelte] = useState(null);

	// Get all products from wishlist table
	const { data: allproducts } = useQuery({
		queryKey: ['productlist'],
		queryFn: () =>
			axios
				.get('/api/wishlist-items/get-data')
				.then((response) => {
					return response.data.getallproduct;
				})
				.catch((error) => {
					console.log('Error Occured', error);
				}),
	});
	// End
	console.log(allproducts);
	if (allproducts?.length === 0) {
		return (
			<div className=" py-20 flex-col font-crimson text-4xl text-primary flex items-center justify-center">
				<h1 className="l">Your Wishlist is empty</h1>
				<div className="shop-now text-base py-3 px-5 hover:bg-[#faf2ec] hover:text-primary hover:cursor-pointer bg-primary text-[#faf2ec] mt-5 border border-primary">
					<Link href="/products?category=bedroom">SHOP NOW</Link>
				</div>
			</div>
		);
	}

	// Delete product from wishlist table
	const deleteproduct = (id) => {
		setItemDelte(id);
		axios
			.post('/api/wishlist-items/delete-item', { id })
			.then(() => {
				queryClient.invalidateQueries('productlist');
			})
			.catch((error) => {
				console.log('Error Occured while deleting product', error);
			})
			.finally(() => {
				queryClient.invalidateQueries('productlist');
				setItemDelte(false);
			});
	};
	// End

	// Move product to Cart Table
	const movetocart = (productid, quantity, sku, id) => {
		setToCart(id);
		axios
			.post('/api/cart-items/from-wishlist', {
				productid,
				quantity,
				sku,
			})
			.then(() => {
				deleteproduct(id);
			})
			.catch((error) => {
				console.log('Error', error);
			})
			.finally(() => {
				queryClient.invalidateQueries('productlist');
				setToCart(false);
			});
	};
	// End

	return (
		<div className="product-wrapper  pb-20" style={{ minHeight: '500px' }}>
			<div className="container">
				<div className="my-items flex gap-2 flex-wrap">
					<Toaster />
					{allproducts?.map((product) => (
						<div key={product.id}>
							<Link
								href={`/product-detail/${product.productid}`}
								className="block w-max"
							>
								<Card className="!w-80 py-3">
									<CardContent className="px-3">
										<div>
											<Image
												src={`${BLOB_BASE_URL}/${product.products.image}`}
												alt={product.products.name}
												height={250}
												width={250}
												className=" w-full rounded-md"
											/>
										</div>
									</CardContent>
									<CardFooter>
										<div className="flex gap-4">
											<div className="title text-primary leading-5 font-semibold font-crimson text-base pb-3">
												{product.products.name}
											</div>
											<div className="amount flex justify-center items-center">
												<div className="constant font-roboto text-primary font-semibold">
													<IndianRupee width={17} />
												</div>
												<div className="variation font-roboto text-primary font-semibold">
													{product.products.price}
												</div>
											</div>
										</div>
									</CardFooter>
								</Card>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
