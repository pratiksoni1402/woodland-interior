'use client';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function SortByFilter() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathName = usePathname();
	// Get price param from URL
	const priceParam = searchParams.get('price');

	const handleSortChange = (value) => {
		const params = new URLSearchParams(searchParams);
		value === 'reset' ? params.delete('price') : params.set('price', value);

		// Build URL
		const queryString = params.toString();
		router.push(`${pathName}${queryString ? `?${queryString}` : ''}`);
	};

	return (
		<div>
			<Select onValueChange={handleSortChange} value={priceParam || undefined}>
				<SelectTrigger className="w-[180px] hover:cursor-pointer font-roboto">
					<SelectValue placeholder="Sort By:" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="hightolow" className="hover:cursor-pointer">
						Price: High to Low
					</SelectItem>
					<SelectItem value="lowtohigh" className="hover:cursor-pointer">
						Price: Low to High
					</SelectItem>
					<SelectItem value="reset" className="hover:cursor-pointer">
						Reset Price
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
