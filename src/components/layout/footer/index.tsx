import React from 'react';
import Link from 'next/link';

import WoodlandLogo from '@/icons/footer-logo';
const footerLinks = [
	{
		title: 'Site Map',
		links: [
			{ href: '/', label: 'Home', title: 'Home' },
			{ href: '/products?category=outdoor', label: 'Shop', title: 'Shop' },
			{ href: '/contact', label: 'Contact us', title: 'Contact us' },
		],
	},
	{
		title: 'Compliance',
		links: [
			{ href: '/change-logs', label: 'Change Logs', title: 'Change Logs' },
			{
				href: '/privacy-policy',
				label: 'Privacy Policy',
				title: 'Privacy Policy',
			},
			{
				href: '/terms-conditions',
				label: 'Terms & Condition',
				title: 'Terms & Condition',
			},
		],
	},
	{
		title: 'Useful Links',
		links: [
			{ href: '/', label: 'Exporters', title: 'Exporters' },
			{ href: '/', label: 'Buy in Bulk', title: 'Buy in Bulk' },
			{ href: '/', label: 'Hotel Furniture', title: 'Hotel Furniture' },
			{ href: '/', label: 'Delivery Location', title: 'Delivery Location' },
			{ href: '/', label: 'Custom Furniture', title: 'Custom Furniture' },
		],
	},
	{
		title: 'Partners',
		links: [
			{ href: '/', label: 'Design Service', title: 'Design Service' },
			{ href: '/', label: 'Design Partners', title: 'Design Partners' },
			{ href: '/', label: 'Become a Franchise', title: 'Become a Franchise' },
		],
	},
	{
		title: 'Explore More',
		links: [
			{ href: '/', label: 'Blog', title: 'Blog' },
			{ href: '/', label: 'Visit Us', title: 'Visit Us' },
			{ href: '/', label: 'Gift Cards', title: 'Gift Cards' },
			{ href: '/', label: 'Refer & Earn', title: 'Refer & Earn' },
		],
	},
];

const Footer = () => {
	return (
		<div className="footer-section bg-white border-t border-border">
			<footer className="container">
				<div className="upper-footer py-10 border-b">
					<div className="upper-footer-wrapper grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-10 lg:justify-around md:justify-evenly">
						{/* Logo */}
						<div className="col lg:order-1 md:order-2 sm:order-2 order-2">
							{/* Large size */}
							<div className="text-center">
								<WoodlandLogo width={140} height={200} />
							</div>
						</div>

						{/* Footer Links */}
						{footerLinks.map((group, i) => (
							<div
								key={i}
								className="col lg:order-2 md:order-1 sm:order-1 order-1"
							>
								<div className="text-primary text-sm font-roboto pt-4">
									<h2 className="pb-2 font-semibold">{group.title}</h2>
									<ul>
										{group.links.map((link, j) => (
											<li key={j}>
												<Link
													href={link.href}
													className="make-bold-props"
													title={link.title}
												>
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
