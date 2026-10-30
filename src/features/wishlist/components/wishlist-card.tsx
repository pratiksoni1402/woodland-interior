'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IndianRupee, Loader2Icon } from 'lucide-react';
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
import type { WishlistItem } from '../types';

interface WishlistCardProps {
	item: WishlistItem;
	onDelete: (id: number) => Promise<void>;
	onMoveToCart: (params: {
		id: number;
		productid: number;
		sku: string;
		quantity: number;
	}) => Promise<void>;
}

export function WishlistCard({ item, onDelete, onMoveToCart }: WishlistCardProps) {
	const [isMoving, setIsMoving] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const handleMoveToCart = async () => {
		try {
			setIsMoving(true);
			await onMoveToCart({
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
				<div className="xl:col-span-3 lg:col-span-3 sm:col-span-4 col-span-12">
					<Image
						src={imageUrl}
						alt={item.products?.name ?? 'Product'}
						height={250}
						width={250}
						className="sm:w-[250px] w-full object-cover"
					/>
				</div>
				<div className="xl:col-span-7 lg:col-span-7 sm:col-span-6 col-span-12">
					<div className="description">
						<div className="title text-primary font-semibold font-crimson text-xl pb-3">
							{item.products?.name}
						</div>
						{item.products?.description && (
							<div className="description text-[#4b4537] font-roboto text-sm pb-3">
								{item.products.description}
							</div>
						)}
						<div className="constant text-[#4b4537] font-roboto text-sm pb-3">
							SKU: <span className="variation font-semibold">{item.sku}</span>
						</div>
					</div>
				</div>
				<div className="xl:col-span-2 lg:col-span-2 sm:col-span-2 col-span-12 sm:block flex justify-between items-start">
					<div className="amount flex justify-end items-center text-sm">
						<div className="constant font-roboto text-primary font-semibold">
							<IndianRupee size={14} />
						</div>
						<div className="variation font-roboto text-primary font-semibold">
							{item.products?.price}
						</div>
					</div>
					<div className="actions flex flex-col justify-end sm:pt-20 pt-0">
						<Link
							href={`/product-detail/${item.productid}`}
							className="text-end font-roboto text-sm font-medium text-primary border-b border-transparent hover:underline"
						>
							View Detail
						</Link>
						<Button
							onClick={handleMoveToCart}
							disabled={isMoving}
							className="pr-0 justify-end font-roboto text-sm text-primary hover:underline bg-transparent hover:bg-transparent shadow-none"
						>
							{isMoving && <Loader2Icon className="animate-spin mr-1" size={14} />}
							Move to Cart
						</Button>

						<div className="text-right">
							<AlertDialog>
								<AlertDialogTrigger asChild>
									<Button
										disabled={isDeleting}
										className="pr-0 font-roboto text-sm text-red-600 hover:underline bg-transparent hover:bg-transparent shadow-none"
									>
										{isDeleting && <Loader2Icon className="animate-spin mr-1" size={14} />}
										Remove
									</Button>
								</AlertDialogTrigger>
								<AlertDialogContent className="bg-background">
									<AlertDialogHeader>
										<AlertDialogTitle className="text-primary font-crimson text-2xl font-bold">
											Remove from Wishlist?
										</AlertDialogTitle>
										<AlertDialogDescription className="text-primary font-roboto">
											Are you sure you want to remove &quot;{item.products?.name}&quot; from your wishlist?
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

export default WishlistCard;
