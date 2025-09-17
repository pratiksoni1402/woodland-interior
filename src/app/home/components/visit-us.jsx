import Link from 'next/link';
export default function Visitshop() {
	return (
		<div className="visit-shop">
			<section className="timber-furniture md:py-16 py-5">
				<div className="product-description font-crimson text-primary text-center md:text-4xl md:leading-10 text-2xl leading-7">
					Crafted Elegance: Timber Furniture for Timeless Spaces
				</div>
				<div className="visit-store text-center mt-8">
					<Link
						href="/products?category=bedroom"
						className="inline-block no-underline rounded-none font-roboto py-3 px-6 text-sm bg-primary border border-primary text-white hover:border-secondary hover:duration-300 hover:bg-secondary"
					>
						Shop Now
					</Link>
				</div>
			</section>
		</div>
	);
}
