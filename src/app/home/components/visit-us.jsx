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
						href="/src/app/product-listing/bedroom"
						className="inline-block no-underline rounded-none text-primary font-roboto py-3 px-6 text-sm bg-transparent border border-border hover:text-white hover:border hover:border-primary hover:duration-300 hover:bg-primary"
					>
						VISIT SHOP
					</Link>
				</div>
			</section>
		</div>
	);
}
