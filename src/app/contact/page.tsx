import { ContactForm } from './component/form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Us | Woodland Interiors',
	description:
		'Get in touch with Woodland Interiors for inquiries, support, or feedback. Reach us via phone, email, or visit our office.',
	robots: {
		index: true, // allow indexing
		follow: true, // allow crawling links
	},
};

const ContactPage = () => {
	return (
		<div className="contact-page pb-20">
			<div className="heading container text-center py-5 text-4xl text-[#3c2f27]">
				<h1 className="font-crimson ">Contact Me</h1>
				<p className="text-base text-[#3c2f27] pt-4 lg:w-1/2 md:w-3/4 w-full mx-auto text-justify font-roboto">
					I am open to receive feedback or suggestion regarding this project any
					improvements or mistakes which can we improved. I request you to use
					your real name and email if you contact me.
				</p>
			</div>
			<div className="content-wrapper container grid grid-cols-1">
				<div className="form-wrapper lg:w-1/2 md:w-3/4 w-full mx-auto">
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
