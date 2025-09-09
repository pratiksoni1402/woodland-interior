import Link from 'next/link';
import { CATEGORY_MEDIA_BASE_URL } from '@/app/_lib/constants/blob';
import LazyImage from '@/app/_lib/utils/lazy-image';
export default function Categories() {
	const productCategories = [
		{
			id: 1,
			name: 'Bedroom',
			link: '/products?category=bedroom',
			image: 'bedroom.jpg',
		},
		{
			id: 2,
			name: 'Dinning Tables',
			link: '/products?category=dining-tables',
			image: 'dining.jpg',
		},
		{
			id: 3,
			name: 'Sofa Sets',
			link: '/products?category=sofa-sets',
			image: 'sofa-set.jpg',
		},
		{
			id: 4,
			name: 'Outdoor',
			link: '/products?category=outdoor',
			image: 'outdoor.jpg',
		},
	];
	return (
		<div className="flex gap-7 justify-center text-primary items-center text-center text-sm font-roboto font-normal tracking-wide">
			{productCategories.map((items) => (
				<Link key={items.id} href={items.link} className="group">
					<div className="relative h-[100px] w-[100px] overflow-hidden">
						<LazyImage
							src={`${CATEGORY_MEDIA_BASE_URL}/${items.image}`}
							alt={items.name}
							width={100}
							height={100}
							className=" group-hover:scale-125 transition-transform duration-300 w-[100px] h-[100px]"
						/>
					</div>
					<div className="group-hover:font-semibold pt-2">{items.name}</div>
				</Link>
			))}
		</div>
	);
}
