import Image from 'next/legacy/image';
import { useEffect, useState, type CSSProperties } from 'react';

interface LazyImageProps {
	src: string;
	blurSrc?: string;
	alt: string;
	quality?: number;
	noImageSrc?: string;
	style?: CSSProperties;
	objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
	className?: string;
	mouseOverImageSrc?: string;
}

export default function LazyImage({
	src,
	blurSrc,
	alt,
	quality = 100,
	noImageSrc = '/images/no-image.jpg',
	style = {},
	objectFit,
	className = '',
	mouseOverImageSrc,
}: LazyImageProps) {
	const [imageSrc, setImageSrc] = useState(src);
	const optionalProps: { objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' } = {};

	if (objectFit) {
		optionalProps.objectFit = objectFit;
	}

	useEffect(() => {
		setImageSrc(src);
	}, [src]);

	return (
		<>
			<Image
				loading="lazy"
				key={imageSrc}
				src={imageSrc}
				alt={alt}
				layout="fill"
				placeholder="blur"
				blurDataURL={blurSrc || imageSrc}
				onError={() => {
					setImageSrc(noImageSrc);
				}}
				quality={quality}
				style={style}
				className={className}
				onMouseOver={() => {
					if (mouseOverImageSrc) {
						setImageSrc(mouseOverImageSrc);
					}
				}}
				onMouseLeave={() => {
					if (mouseOverImageSrc) {
						setImageSrc(src);
					}
				}}
				{...optionalProps}
			/>
		</>
	);
}
