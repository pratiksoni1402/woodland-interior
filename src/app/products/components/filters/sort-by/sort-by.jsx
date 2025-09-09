import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export default function SortByFilter() {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Sort By:" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="hightolow">Price: High to low</SelectItem>
					<SelectItem value="lowtohigh">Price: Low to High</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
