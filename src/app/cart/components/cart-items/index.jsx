'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IndianRupee, Minus, Plus } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Loader2Icon } from 'lucide-react';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import toast from 'react-hot-toast';
import { MoonLoader } from 'react-spinners';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BLOB_BASE_URL } from '@/app/_lib/constants/blob';
import { showErrorToast } from '@/lib/toast';
export default function CartItems() {
	let totalPrice = 0;
	let subtotal = 0;
	let taxrate = 9;
	let taxamount = (totalPrice * taxrate) / 100;
	const [loading, setLoading] = useState(false);
	const [productLoading, setProductLoading] = useState(null);
	const [descreaseLoader, setDecreaseLoader] = useState(null);
	const [towishlist, setToWishlist] = useState(null);
	const queryClient = useQueryClient();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	//Get All Products from Cart Table
	const {
		isPending,
		data: totalproducts,
		error,
	} = useQuery({
		queryKey: ['product'],
		queryFn: () =>
			axios
				.get('/api/cart-items/get-data')
				.then((response) => {
					return response.data.cartdata;
				})
				.catch((error) => {
					console.error('Error fetching data:', error);
					throw error;
				}),
	});
	// End

	if (totalproducts?.length === 0) {
		return (
			<div className="w-full h-screen bg-background mt-[-70px] flex-col font-crimson text-4xl text-primary flex items-center justify-center">
				<h1 className="sm:text-4xl text-2x">Your Cart is empty</h1>
				<div className="shop-now text-sm py-3 px-5 hover:bg-secondary font-roboto hover:text-white hover:cursor-pointer bg-primary text-white mt-5 border border-primary hover:border-border">
					<Link href="/products?category=bedroom">Shop Now</Link>
				</div>
			</div>
		);
	}

	if (!totalproducts) {
		return (
			<div className="loading h-screen bg-background w-full flex justify-center items-center">
				<MoonLoader color="#3c2f27" />
			</div>
		);
	}

	// Delete Product From Cart Table
	function cnfdelete(id) {
		setLoading(true);
		axios
			.post('/api/cart-items/delete-item', { id })
			.then((response) => {})
			.catch((error) => {
				console.log('Error occured', error);
			})
			.finally(() => {
				setLoading(false);
				queryClient.invalidateQueries('product');
			});
	}
	// End

	// Move to wishlist
	const movetowishlist = (productid, sku, id, quantity) => {
		setToWishlist(id);
		axios
			.post('/api/wishlist-items/from-cart', {
				productid,
				sku,
				quantity,
			})
			.then((response) => {
				cnfdelete(id);
			})
			.catch((error) => {})
			.finally(() => {
				queryClient.invalidateQueries('product');
				setToWishlist(false);
			});
	};
	// End

	// Increase Quantity
	const increasequantity = (quantity, id) => {
		if (quantity < 10) {
			const updatequantity = quantity + 1;
			setProductLoading(id);
			axios
				.put('/api/cart-items/update-quantity', {
					quantity: updatequantity,
					id,
				})
				.then((response) => {
					queryClient.invalidateQueries('product');
				})
				.catch((error) => {
					console.log('Error while updating quantity', error);
				})
				.finally(() => {
					setProductLoading(false);
				});
		} else {
			showErrorToast('Only 10 Prodcuts are allowed to buy');
		}
	};
	// End

	// Decrease Quantity
	const decreasequantity = (quantity, id) => {
		if (quantity > 1) {
			const changequantity = quantity - 1;
			setDecreaseLoader(id);
			axios
				.put('/api/cart-items/update-quantity', {
					quantity: changequantity,
					id,
				})
				.then((response) => {
					queryClient.invalidateQueries('product');
				})
				.catch((error) => {
					console.log('Error', error);
				})
				.finally(() => {
					setDecreaseLoader(false);
				});
		} else {
			showErrorToast('Minimum quantity should be 1');
		}
	};

	const handleClick = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(true);
			router.push('/checkout');
		}, 1000); // Show loader for 1 second
	};

	return (
		<div className="cart-items bg-background pt-5 pb-10">
			<div className="container">
				<div className="grid grid-cols-12 gap-5">
					<div className="lg:col-span-9 col-span-12">
						<div className="product-wrapper">
							<div className="heading pb-3 sm:text-4xl text-xl font-crimson border-b border-border  text-primary">
								Items in your cart
							</div>
							<div className="grid grid-col-1">
								<div className="col">
									<div className="my-items">
										<Toaster />
										{totalproducts?.map(
											(product) => (
												(totalPrice +=
													product.products.price * product.quantity),
												(taxamount = (totalPrice * 9) / 100),
												(subtotal = totalPrice - taxamount * 2),
												(
													<div
														className="product py-10 border-b border-border"
														key={product.id}
													>
														<div className="grid grid-cols-12 gap-3">
															<div className="xl:col-span-3 lg:col-span-3 md:col-span-4 col-span-12">
																<Image
																	src={`${BLOB_BASE_URL}/${product.products.image}`}
																	alt={product.products.name}
																	height={250}
																	width={250}
																	className="sm:w-[250px] w-full"
																/>
															</div>
															<div className="xl:col-span-7 lg:col-span-7 md:col-span-6 col-span-12">
																<div className="description">
																	<div className="title text-primary font-semibold font-crimson text-xl pb-3">
																		{product.products.name}
																	</div>
																	<div className="description text-primary font-roboto text-sm pb-3">
																		{product.products.description}
																	</div>
																	<div className="constant  text-primary font-roboto text-sm pb-3">
																		SKU:{' '}
																		<span className="variation font-semibold">
																			{product.sku}
																		</span>
																	</div>
																</div>{' '}
																<div className="quantity py-3 ">
																	<div className="pb-1 text-xs text-primary font-roboto">
																		Quantity:
																	</div>
																	<div className="flex items-center">
																		{productLoading === product.id ? (
																			<Button
																				variant="outline"
																				className="border-primary hover:cursor-pointer border text-lg bg-primary text-white w-[26px] h-[26px] rounded-full px-0 py-0 hover:bg-background hover:border-border"
																			>
																				<Loader2Icon className="animate-spin" />
																			</Button>
																		) : (
																			<Button
																				variant="outline"
																				onClick={() =>
																					increasequantity(
																						product.quantity,
																						product.id
																					)
																				}
																				className="border-primary hover:cursor-pointer border text-lg bg-primary text-white hover:text-white w-[26px] h-[26px] rounded-full px-0 py-0 hover:bg-secondary hover:border-secondary"
																			>
																				<Plus />
																			</Button>
																		)}
																		<span className="px-4 h-10 text-primary font-semibold text-sm flex items-center">
																			{product.quantity}
																		</span>
																		{descreaseLoader === product.id ? (
																			<Button
																				variant="outline"
																				className="border-primary hover:cursor-pointer border text-lg bg-primary text-white w-[26px] h-[26px] rounded-full px-0 py-0 hover:bg-secondary hover:border-secondary"
																			>
																				<Loader2Icon className="animate-spin " />
																			</Button>
																		) : (
																			<Button
																				variant="outline"
																				onClick={() =>
																					decreasequantity(
																						product.quantity,
																						product.id
																					)
																				}
																				className="border-primary hover:cursor-pointer border text-lg bg-primary text-white w-[26px] h-[26px] rounded-full px-0 py-0 hover:bg-secondary hover:border-secondary hover:text-white"
																			>
																				<Minus />
																			</Button>
																		)}
																	</div>
																</div>
															</div>
															<div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-12">
																<div className="amount flex md:justify-end justify-start text-sm items-center">
																	<div className="constant font-roboto text-primary font-semibold">
																		<IndianRupee size={14} />
																	</div>
																	<div className="variation font-roboto text-primary font-semibold">
																		{product.products.price * product.quantity}
																	</div>
																</div>
																<div className="actions flex flex-col justify-end md:pt-20 pt-5">
																	<Link
																		href={`/product-detail/${product.productid}`}
																		className="md:text-end text-left font-roboto text-sm font-medium text-primary border-b border-transparent hover:underline "
																	>
																		View Detail
																	</Link>

																	{towishlist === product.id ? (
																		<Button
																			className="px-0 md:justify-end justify-start font-roboto text-sm text-primary border-b border-transparent hover:underline "
																			variant="#3c2f27"
																			disabled={true}
																		>
																			<Loader2Icon className="animate-spin mr-1" />
																			Move to Wishlist
																		</Button>
																	) : (
																		<Button
																			onClick={() =>
																				movetowishlist(
																					product.productid,
																					product.sku,
																					product.id,
																					product.quantity
																				)
																			}
																			className="px-0 md:justify-end justify-start font-roboto text-sm text-primary border-b hover:cursor-pointer border-transparent hover:underline "
																			variant="#3c2f27"
																		>
																			Move to Wishlist
																		</Button>
																	)}

																	<AlertDialog className="rounded-none">
																		<AlertDialogTrigger asChild>
																			<Button
																				className="mt-[-10px] md:justify-end justify-start font-roboto text-sm text-primary px-0  border-b border-transparent hover:text-primary hover:underline bg-transparent hover:bg-transparent hover:cursor-pointer shadow-none"
																				variant="outline"
																			>
																				Delete from cart
																			</Button>
																		</AlertDialogTrigger>
																		<AlertDialogContent className="bg-background">
																			<AlertDialogHeader>
																				<AlertDialogTitle>
																					Remove Product?
																				</AlertDialogTitle>
																				<AlertDialogDescription className="font-roboto">
																					Are you sure you want to delete this
																					product from your cart!
																				</AlertDialogDescription>
																			</AlertDialogHeader>
																			<AlertDialogFooter className="!font-roboto font-sm font-medium">
																				<AlertDialogCancel className="hover:duration-300 rounded-none bg-transparent text-primary border-border  hover:border-secondary hover:text-[white] hover:bg-secondary hover:cursor-pointer">
																					Cancel
																				</AlertDialogCancel>
																				<AlertDialogAction
																					onClick={() => cnfdelete(product.id)}
																					className="hover:duration-300 rounded-none bg-primary text-white hover:bg-secondary hover:cursor-pointer"
																				>
																					{loading ? (
																						<div className="flex flex-row items-start justify-center">
																							<Loader2Icon className="animate-spin mr-1" />
																							<span>Delete</span>
																						</div>
																					) : (
																						'Delete'
																					)}
																				</AlertDialogAction>
																			</AlertDialogFooter>
																		</AlertDialogContent>
																	</AlertDialog>
																</div>
															</div>
														</div>
													</div>
												)
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:col-span-3 col-span-12">
						<div className="order-summary-wrapper sticky top-20 mt-[53px]">
							<div className="wrapper border border-border p-4 font-roboto text-sm text-primary">
								<div className="heading border-b border-border text-center py-5 font-semibold">
									Summary
								</div>
								<div className="calculation ">
									<div className="sub-total pt-3 flex justify-between px-2">
										<div>Sub-Total:</div>
										<div className="flex items-center">
											<span className="">
												<IndianRupee width={14} />
											</span>
											<span>{subtotal}</span>
										</div>
									</div>
									<div className="sub-total flex py-2 justify-between px-2">
										<div>Central GST:</div>
										<div className="flex items-center">
											<span className="">
												<IndianRupee width={14} />
											</span>
											<span>{taxamount}</span>
										</div>
									</div>
									<div className="sub-total flex pb-3 justify-between text-sm px-2">
										<div>State GST:</div>
										<div className="flex items-center">
											<span className="">
												<IndianRupee width={14} />
											</span>
											<span>{taxamount}</span>
										</div>
									</div>
									<div className="total-price flex font-semibold pt-3 pb-5 border-t border-border justify-between px-2">
										<div>Total:</div>
										<div className="flex items-center">
											<span className="svg-strking">
												<IndianRupee width={14} />
											</span>
											<span>{totalPrice}</span>
										</div>
									</div>
								</div>
								<div className="place-order text-center w-full font-roboto font-sm">
									{isLoading ? (
										<Button
											type="submit"
											className=" w-full bg-primary hover:bg-background hover:text-primary border border-primary rounded-md"
											disabled={true}
										>
											<Loader2Icon className="animate-spin mr-1" />
											Proceed to Checkout
										</Button>
									) : (
										<Button
											type="submit"
											onClick={handleClick}
											className="w-full border hover:border-border bg-primary border-primary hover:cursor-pointer hover:bg-secondary rounded-md text-white  block text-center"
										>
											Proceed to Checkout
										</Button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
