'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IndianRupee, Minus, Plus, Loader2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { BLOB_BASE_URL } from '@/lib/blob';
import { showErrorToast } from '@/lib/toast';
import type { CartItem } from '../types';

interface CartItemRowProps {
	item: CartItem;
	onDelete: (id: number) => Promise<void>;
	onUpdateQuantity: (params: { id: number; quantity: number }) => Promise<void>;
	onMoveToWishlist: (params: {
		id: number;
		productid: number;
		sku: string;
		quantity: number;
	}) => Promise<void>;
}

export function CartItemRow({
	item,
	onDelete,
	onUpdateQuantity,
	onMoveToWishlist,
}: CartItemRowProps) {
	const [isUpdating, setIsUpdating] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isMoving, setIsMoving] = useState(false);

	const handleIncrease = async () => {
		if (item.quantity >= 10) {
			showErrorToast('Only 10 Products are allowed to buy');
			return;
		}
		try {
			setIsUpdating(true);
			await onUpdateQuantity({ id: item.id, quantity: item.quantity + 1 });
		} finally {
			setIsUpdating(false);
		}
	};

	const handleDecrease = async () => {
		if (item.quantity <= 1) {
			showErrorToast('Minimum quantity should be 1');
			return;
		}
		try {
			setIsUpdating(true);
			await onUpdateQuantity({ id: item.id, quantity: item.quantity - 1 });
		} finally {
			setIsUpdating(false);
		}
	};

	const handleMoveToWishlist = async () => {
		try {
			setIsMoving(true);
			await onMoveToWishlist({
				id: item.id,
				productid: item.productid,
				sku: item.sku,
				quantity: item.quantity,
			});
		} finally {
			setIsMoving(false);
		}
	};

	const handleDelete = async () => {
		try {
			setIsDeleting(true);
			await onDelete(item.id);
		} finally {
			setIsDeleting(false);
		}
	};

	const imageUrl = item.products?.image
		? `${BLOB_BASE_URL}/${item.products.image}`
		: '/images/no-image.jpg';

	return (
		<div className="product py-10 border-b border-border">
			<div className="grid grid-cols-12 gap-3">
				<div className="xl:col-span-3 lg:col-span-3 md:col-span-4 col-span-12">
					<Image
						src={imageUrl}
						alt={item.products?.name ?? 'Product'}
						height={250}
						width={250}
						className="sm:w-[250px] w-full object-cover"
					/>
				</div>
				<div className="xl:col-span-7 lg:col-span-7 md:col-span-6 col-span-12">
					<div className="description">
						<div className="title text-primary font-semibold font-crimson text-xl pb-3">
							{item.products?.name}
						</div>
						{item.products?.description && (
							<div className="description text-primary font-roboto text-sm pb-3">
								{item.products.description}
							</div>
						)}
						<div className="constant text-primary font-roboto text-sm pb-3">
							SKU: <span className="variation font-semibold">{item.sku}</span>
						</div>
					</div>

					<div className="quantity py-3">
						<div className="pb-1 text-xs text-primary font-roboto">Quantity:</div>
						<div className="flex items-center">
							<Button
								variant="outline"
								onClick={handleIncrease}
								disabled={isUpdating}
								className="border-primary hover:cursor-pointer border text-lg bg-primary text-white hover:text-white w-[26px] h-[26px] rounded-full px-0 py-0 hover:bg-secondary hover:border-secondary"
							>
								{isUpdating ? <Loader2Icon className="animate-spin" size={14} /> : <Plus size={14} />}
							</Button>
							<span className="px-4 h-10 text-primary font-semibold text-sm flex items-center">
								{item.quantity}
							</span>
							<Button
								variant="outline"
								onClick={handleDecrease}
								disabled={isUpdating}
								className="border-primary hover:cursor-pointer border text-lg bg-primary text-white w-[26px] h-[26px] rounded-full px-0 py-0 hover:bg-secondary hover:border-secondary hover:text-white"
							>
								{isUpdating ? <Loader2Icon className="animate-spin" size={14} /> : <Minus size={14} />}
							</Button>
						</div>
					</div>
				</div>

				<div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-12">
					<div className="amount flex md:justify-end justify-start text-sm items-center">
						<div className="constant font-roboto text-primary font-semibold">
							<IndianRupee size={14} />
						</div>
						<div className="variation font-roboto text-primary font-semibold">
							{(item.products?.price ?? 0) * item.quantity}
						</div>
					</div>

					<div className="actions flex flex-col justify-end md:pt-20 pt-5">
						<Link
							href={`/product-detail/${item.productid}`}
							className="md:text-end text-left font-roboto text-sm font-medium text-primary border-b border-transparent hover:underline"
						>
							View Detail
						</Link>

						<Button
							className="px-0 md:justify-end justify-start font-roboto text-sm text-primary hover:underline bg-transparent hover:bg-transparent shadow-none"
							onClick={handleMoveToWishlist}
							disabled={isMoving}
						>
							{isMoving && <Loader2Icon className="animate-spin mr-1" size={14} />}
							Move to Wishlist
						</Button>

						<div className="md:text-right text-left">
							<AlertDialog>
								<AlertDialogTrigger asChild>
									<Button
										className="px-0 font-roboto text-sm text-red-600 hover:underline bg-transparent hover:bg-transparent shadow-none"
										disabled={isDeleting}
									>
										{isDeleting && <Loader2Icon className="animate-spin mr-1" size={14} />}
										Remove
									</Button>
								</AlertDialogTrigger>
								<AlertDialogContent className="bg-background">
									<AlertDialogHeader>
										<AlertDialogTitle className="text-primary font-crimson text-2xl font-bold">
											Remove item from cart?
										</AlertDialogTitle>
										<AlertDialogDescription className="text-primary font-roboto">
											Are you sure you want to remove &quot;{item.products?.name}&quot; from your cart?
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel className="bg-transparent border-primary hover:bg-muted">
											Cancel
										</AlertDialogCancel>
										<AlertDialogAction
											onClick={handleDelete}
											className="bg-primary hover:bg-secondary text-white"
										>
											Delete
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItemRow;
