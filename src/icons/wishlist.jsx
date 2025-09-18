const HeartIcon = ({ size = 24, color = '#3c2f27', fill, className = '' }) => {
	return (
		<svg
			width={`${size}px`}
			height={`${size}px`}
			stroke={color}
			strokeWidth="1.2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M12 21.25
          C11.3 21.25 10.67 20.99 10.12 20.66
          C9.56 20.33 9.01 19.9 8.5 19.5
          C7.07 18.38 5.25 17.09 3.82 15.48
          C2.36 13.84 1.25 11.8 1.25 9.14
          C1.25 6.42 2.78 4.07 5 3.06
          C7.26 2.02 10.1 2.44 12 4.98
          C13.9 2.44 16.74 2.02 19 3.06
          C21.22 4.07 22.75 6.42 22.75 9.14
          C22.75 11.8 21.64 13.84 20.18 15.48
          C18.75 17.09 16.93 18.38 15.5 19.5
          C14.99 19.9 14.44 20.33 13.88 20.66
          C13.33 20.99 12.7 21.25 12 21.25
          Z"
				fill={fill}
			/>
		</svg>
	);
};

export default HeartIcon;
