import type { Metadata } from 'next'
import { ContactView } from '@/features/contact-us'
import '@/features/contact-us/style.css'

export const metadata: Metadata = {
	title: 'Contact Us | Woodland Interiors',
	description:
		'Get in touch with Woodland Interiors for inquiries, support, or feedback. Reach us via phone, email, or visit our office.',
	robots: {
		index: true,
		follow: true,
	},
}

export default function ContactPage() {
	return <ContactView />
}
