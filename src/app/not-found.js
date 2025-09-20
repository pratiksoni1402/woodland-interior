import Link from 'next/link';
export default function Notfound() {
	return (
		<div className="not-found-page ">
			<div className="container">
				<section className="page_404 py-10 px-0 font-crimson border-b">
					<div className="row">
						<div className="col-sm-12 ">
							<div className="col-sm-10 col-sm-offset-1  text-center">
								<div
									className="four_zero_four_bg"
									style={{
										backgroundImage:
											'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
										width: '100%',
										height: '400px',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'contain',
									}}
								>
									<h1 className="text-center text-5xl font-crimson text-[#3c2f27]">
										404
									</h1>
								</div>
								<div className="contant_box_404 text-[#3c2f27] font-crimson text-2xl">
									<h3 className="h2">Look like you are lost</h3>
									<p>the page you are looking for not avaible!</p>
									<Link
										href="/"
										className="hover:bg-white hover:text-[#3c2f27] border border-[#3c2f27] link_404 py-3 px-5 bg-[#3c2f27] text-sm my-5 mx-0 inline-block text-[#faf2ec]"
									>
										Go to Home Page
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
