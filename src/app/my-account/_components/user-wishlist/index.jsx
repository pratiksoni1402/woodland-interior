'use client';
import Image from 'next/image';
import { IndianRupee } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { BLOB_BASE_URL } from '@/app/_lib/constants/blob';

import { useState } from 'react';

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
			<div className=" py-20 flex-col font-crimson  text-primary flex items-center justify-center">
				<h1 className="sm:text-4xl text-xl">Your Wishlist is empty</h1>
				<div className="shop-now text-sm font-roboto py-3 px-5 hover:bg-secondary text-white hover:cursor-pointer bg-primary hover:border-secondary mt-5 border border-primary">
					<Link href="/products?category=bedroom">Shop Now</Link>
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
		<div className="product-wrapper  pb-20">
			<div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-5 gap-2">
				<Toaster />
				{allproducts?.map((product) => (
					<div key={product.id} className="group">
						<Link
							href={`/product-detail/${product.productid}`}
							className="block"
						>
							<div>
								<div className="overflow-hidden">
									<Image
										src={`${BLOB_BASE_URL}/${product.products.image}`}
										alt={product.products.name}
										height={250}
										width={250}
										className=" w-full group-hover:scale-125 transition-transform duration-300"
									/>
								</div>
								<div>
									<div className="flex gap-2 flex-col m-2 font-roboto text-sm">
										<div className="title text-primary text-center leading-5 group-hover:font-semibold">
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
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
