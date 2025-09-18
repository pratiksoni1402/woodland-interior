export const HamburgerMenuIcon = ({
	size = 280,
	color = '#3c2f27',
	strokeWidth = 1,
	className = '',
}) => {
	return (
		<svg
			width={`${size}px`}
			height={`${size}px`}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<g>
				<path
					d="M4 6H20M4 12H20M4 18H20"
					stroke={color}
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export default HamburgerMenuIcon;
