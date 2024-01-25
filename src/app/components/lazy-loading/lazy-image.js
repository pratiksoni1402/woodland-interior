import Image from 'next/legacy/image';
import { useEffect, useState } from 'react';


export default function LazyImage({
  src,
  blurSrc,
  alt,
  quality = 80,
  noImageSrc = '/images/no-image.jpg',
  style = {},
  objectFit,
  className = '',
  mouseOverImageSrc,
}) {
  const [imageSrc, setImageSrc] = useState(src);
  let optionalProps = {};

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
