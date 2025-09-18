import { cn } from '@/lib/utils';

export const ShoppingBagIcon = ({
	size = 26,
	className,
	fill,
	stroke,
	...props
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('', className)}
			{...props}
		>
			<g>
				{/* Bag body (closed shape) */}
				<path
					d="M5.8 7C5 7.7 4.6 9 4.1 11.6C3.3 15.7 3 17.7 4.2 19.2C5.4 20.7 7.2 21 12 21C16.8 21 18.6 20.7 19.8 19.2C21 17.7 20.7 15.7 19.9 11.6C19.4 9 19 7.7 18.2 7C17.1 6 15.5 6 12 6C8.5 6 6.9 6 5.8 7Z"
					stroke={stroke}
					strokeWidth="1.2"
					fill={fill}
				/>

				{/* Bag handles */}
				<path
					d="M9 6V5C9 3.3 10.3 2 12 2C13.7 2 15 3.3 15 5V6"
					stroke={stroke}
					strokeWidth="1.2"
					strokeLinecap="round"
					fill={fill}
				/>
			</g>
		</svg>
	);
};

export default ShoppingBagIcon;
