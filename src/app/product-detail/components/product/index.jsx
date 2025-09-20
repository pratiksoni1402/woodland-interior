'use client';

import { BLOB_BASE_URL } from '@/app/_lib/constants/blob';
import { showErrorToast, showSuccessToast } from '@/lib/toast';
import { Button } from '@/components/ui/button';
import { useEffect, useState, use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { IndianRupee, Minus, Plus } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { Loader2Icon } from 'lucide-react';
import axios from 'axios';
import LazyImage from '@/app/_lib/utils/lazy-image';
import Reviews from '@/app/customer-reviews/page';
import DeliveryInfo from '@/app/product-detail/components/delivery-info';
import { MoonLoader } from 'react-spinners';

export default function ProductDetails({ data }) {
	const product = data;
	const queryClient = useQueryClient();
	const [count, setCount] = useState(1);
	const [price, setPrice] = useState();
	const [loading, setLoading] = useState(false);
	const [adding, setAdding] = useState(false);

	// Wishlist Table Data
	const { data: wishlistdata } = useQuery({
		queryKey: ['wishlistitems'],
		queryFn: () =>
			axios.get('/api/wishlist-items/get-data').then((response) => {
				return response.data.getallproduct;
			}),
	});
	// End

	// Invalidate totalcount on add to Cart
	const { data: totalcount } = useQuery({
		queryKey: ['totalcount'],
		queryFn: () =>
			axios.get('/api/cart-items/get-count').then((response) => {
				console.log(response.data.productcount);
				return response.data.productcount;
			}),
	});
	// End

	// Invalidate totalcount on add to Wishlist
	const { data: wishlisttotal } = useQuery({
		queryKey: ['wishlistcount'],
		queryFn: () =>
			axios.get('/api/wishlist-items/get-count').then((response) => {
				console.log(response.data.totalcount);
				return response.data.totalcount;
			}),
	});

	// Updating Price Based on Product Quantity
	useEffect(() => {
		if (product?.price) {
			setPrice(product.price * count);
		}
	}, [count, product?.price]);
	// End

	// Display spinner Until Data is Getting Ready
	if (!product) {
		return (
			<div className="loading h-screen bg-background w-full flex justify-center items-center">
				<MoonLoader color="#3c2f27" />
			</div>
		);
	}
	// End

	// Increasing Product Quantity
	const handleIncrement = () => {
		if (count < 10) {
			setCount((prevCount) => prevCount + 1);
		} else {
			showErrorToast('Only 10 Sets are allowed to buy');
		}
	};
	// End

	// Decreasing Product Quantity
	const handleDecrement = () => {
		if (count > 1) {
			setCount((prevCount) => prevCount - 1);
		}
	};

	// Add to wishlist
	const addtowishlist = (id, sku) => {
		setLoading(true);
		axios
			.post('/api/wishlist-items/set-data', {
				id,
				sku,
				quantity: count,
			})
			.then(() => {
				queryClient.invalidateQueries('wishlistcount');
				showSuccessToast('Product added to wishlist');
			})
			.catch((error) => {
				showErrorToast('Error', error);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	// End

	// Add to cart
	const addtocart = (id, sku, count) => {
		setAdding(true);
		axios
			.post('/api/cart-items/set-data', {
				id,
				sku,
				quantity: count,
			})
			.then(() => {
				queryClient.invalidateQueries('totalcount');
				showSuccessToast('Product added to cart');
			})
			.catch(() => {
				showErrorToast('Error');
			})
			.finally(() => {
				setAdding(false);
			});
	};
	// End

	// Remove Product from wishlist
	const removefromwishlist = (id) => {
		axios
			.post('/api/wishlist-items/delete-item', { id })
			.then(() => {
				queryClient.invalidateQueries('wishlistcount');
			})
			.catch((error) => {
				console.log('Error', error);
			});
	};
	const wishlistid = wishlistdata?.find((a) => a.id);
	// End

	return (
		<div className="product-detail-page ">
			<div className="container">
				<div className="product-wrapper py-10">
					<div className="grid grid-cols-12 gap-7">
						<Toaster />
						<div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-5 col-span-12">
							<div className="left-section">
								<div className="product-image  relative lg:h-[600px] h-[427px]">
									<LazyImage
										src={`${BLOB_BASE_URL}/${product.image}`}
										alt={product.name}
										width={427}
										height={427}
									/>
								</div>
							</div>
						</div>
						<div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-7 col-span-12">
							<div className="right-section">
								<div className="detail-wrapper">
									<div className="variation font-roboto text-sm text-primary pb-2">
										<span className="caption">SKU:</span>
										<span className="value">{product?.sku}</span>
									</div>
									<div className="product-name text-primary font-semibold font-crimson text-2xl pb-2">
										{product?.name}
									</div>
									<div className="description text-primary text-sm pb-2 font-roboto">
										{product?.description}
									</div>
									<div className="pricing flex items-center  text-primary font-semibold font-crimson text-lg">
										<span>
											{' '}
											<IndianRupee width={18} />
										</span>
										<span>{price || ''}</span>
										<span className="text-xs px-1">
											(inclusive of all taxes)
										</span>
									</div>
								</div>
								<div className="actions">
									<div className="quantity py-3 ">
										<div className="pb-1 text-xs text-primary font-roboto">
											Quantity:
										</div>
										<div>
											<Toaster />
										</div>
										<div className="flex items-center ">
											<Button
												onClick={handleIncrement}
												variant="outline"
												className="border-primary hover:cursor-pointer border text-lg bg-primary text-white w-[26px] h-[26px] rounded-full px-0 py-0 hover:bg-secondary hover:border-secondary hover:text-white"
											>
												<Plus />
											</Button>
											<span className="px-4 font-roboto font-bold text-primary h-10 flex items-center">
												{count}
											</span>
											<Button
												onClick={handleDecrement}
												variant="outline"
												className="border-primary hover:cursor-pointer border text-lg bg-primary text-white w-[26px] h-[26px] rounded-full px-0 py-0 hover:bg-secondary hover:border-secondary hover:text-white"
											>
												<Minus />
											</Button>
										</div>
									</div>
									<div className="delivery-info">
										<DeliveryInfo />
									</div>

									<div className="flex sm:flex-nowrap flex-wrap sm:gap-3 gap-">
										<div className="cart py-3 w-full">
											{adding ? (
												<Button
													type="submit"
													className="text-sm w-full text-background bg-primary rounded-md border"
													disabled={true}
												>
													<Loader2Icon className="animate-spin mr-1" />
													Add to bag
												</Button>
											) : (
												<Button
													variant="outline"
													onClick={() =>
														addtocart(product.id, product.sku, count)
													}
													className="text-sm w-full font-roboto hover:cursor-pointer text-white bg-primary hover:text-background hover:bg-secondary border-primary hover:border-secondary rounded-md"
												>
													Add To Bag
												</Button>
											)}
										</div>
										<div className="wishlist py-3 w-full">
											{wishlistdata?.find((v) => v.productid === product.id) ? (
												<>
													{loading ? (
														<Button
															type="submit"
															className="w-full mt-4 mb-3 border hover:border-primary font-roboto bg-secondary-foreground border-secondary-foreground hover:bg-transparent hover:text-primary text-background text-center flex rounded-md"
															disabled={true}
														>
															<Loader2Icon className="animate-spin mr-1" />
															Remove from Wishlisttttt
														</Button>
													) : (
														<Button
															variant="outline"
															onClick={() => removefromwishlist(wishlistid.id)}
															className="text-sm w-full hover:text-primary font-roboto bg-secondary-foreground text-background hover:bg-transparent border-secondary-foreground hover:cursor-pointer rounded-md "
														>
															Remove from Wishlist
														</Button>
													)}
												</>
											) : (
												<>
													{loading ? (
														<Button
															type="submit"
															className="w-full border hover:border-primary bg-primary border-primary hover:bg-transparent hover:text-primary text-background text-center flex"
															disabled={true}
														>
															<Loader2Icon className="animate-spin mr-1" />
															Add to Wishlist
														</Button>
													) : (
														<Button
															variant="outline"
															onClick={() =>
																addtowishlist(product.id, product.sku)
															}
															className="text-sm w-full font-roboto text-primary hover:bg-secondary hover:text-background bg-transparent border-primary hover:border-secondary hover:cursor-pointer rounded-md "
														>
															Add To Wishlist
														</Button>
													)}
												</>
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
	);
}
