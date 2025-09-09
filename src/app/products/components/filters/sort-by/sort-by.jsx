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
				<SelectTrigger className="w-[180px] hover:cursor-pointer font-roboto">
					<SelectValue placeholder="Sort By:" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="hightolow" className="hover:cursor-pointer">
						Price: High to low
					</SelectItem>
					<SelectItem value="lowtohigh" className="hover:cursor-pointer">
						Price: Low to High
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
