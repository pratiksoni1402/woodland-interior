import Link from 'next/link'
import { IndianRupee } from 'lucide-react'
import LazyImage from '@/lib/lazy-image'
import { BLOB_BASE_URL } from '@/lib/blob'
import type { Product } from '../types'

interface ProductCardProps {
	product: Product
}

export function ProductCard({ product }: ProductCardProps) {
	return (
		<Link
			href={`/product-detail/${product.id}`}
			className="sm:my-4 my-0 group"
			aria-label={`${product.name}, ₹${product.price}`}
		>
			<div className="product-image overflow-hidden relative sm:h-[300px] h-[200px]">
				<LazyImage
					src={`${BLOB_BASE_URL}/${product.image}`}
					alt={product.name || 'Product Image'}
					className="group-hover:scale-125 transition-transform duration-300 sm:w-[427px] sm:h-[427px] w-[227px] h-[227px]"
				/>
			</div>
			<div className="detail text-center text-sm text-[#3c2f27] font-roboto group-hover:text-[#3c2f27] group-hover:font-bold transition duration-150">
				<div className="p-2 sm:text-sm text-xs">{product.name}</div>
				<div className="pricing font-bold flex justify-center items-center">
					<IndianRupee size={14} />
					<span>{product.price}</span>
				</div>
			</div>
		</Link>
	)
}
