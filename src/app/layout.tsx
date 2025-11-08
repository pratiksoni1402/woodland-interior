import { ROBOTO, CRIMSON } from './fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';

import Header from './components/header';
import Footer from './components/footer';
import QueryClientProvider from '@/provider/query-client';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
	title: 'Woodland Interiors',
	description: 'One stop for all home interior',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${CRIMSON.variable} ${ROBOTO.variable}`}>
				<QueryClientProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</QueryClientProvider>
				<SpeedInsights />
				<NextTopLoader
					color="#3c2f27"
					initialPosition={0.08}
					crawlSpeed={200}
					height={4}
					crawl={true}
					showSpinner={false}
					easing="ease"
					speed={200}
					shadow="0 0 10px #ffffff,0 0 5px #ffffff"
				/>
				<Toaster richColors position="top-center" />
				<Analytics />
			</body>
		</html>
	);
}
