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
			<div className=" py-20 flex-col font-crimson text-4xl text-[#3c2f27] flex items-center justify-center">
				<h1 className="l">Your Wishlist is empty</h1>
				<div className="shop-now text-base py-3 px-5 hover:bg-[#faf2ec] hover:text-[#3c2f27] hover:cursor-pointer bg-[#3c2f27] text-[#faf2ec] mt-5 border border-[#3c2f27]">
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
				<div className="my-items">
					<Toaster />
					{allproducts?.map((product) => (
						<Link
							href={`/product-detail/${product.productid}`}
							key={product.id}
							className="block w-max"
						>
							<Card className="!w-96">
								<CardContent>
									<div>
										<Image
											src={`${BLOB_BASE_URL}/${product.products.image}`}
											alt={product.products.name}
											height={250}
											width={250}
											className=" w-full"
										/>
									</div>
								</CardContent>
								<CardFooter>
									<div className="flex flex-col">
										<div className="title text-[#3c2f27] leading-6 font-semibold font-crimson text-xl pb-3">
											{product.products.name}
										</div>
										<div className="amount flex justify-center items-center">
											<div className="constant font-roboto text-[#3c2f27] font-semibold">
												<IndianRupee width={17} />
											</div>
											<div className="variation font-roboto text-[#3c2f27] font-semibold">
												{product.products.price}
											</div>
										</div>
									</div>
									{/*<div className="description text-[#4b4537] font-roboto text-sm pb-3">*/}
									{/*	{product.products.description}*/}
									{/*</div>*/}
								</CardFooter>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
