import { ROBOTO, CRIMSON } from './fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

import Header from './components/header';
import Footer from './components/footer';
import QueryClientProvider from '@/provider/query-client';
import NextTopLoader from 'nextjs-toploader';

import './globals.css';

export const metadata = {
	title: 'Woodland Interiors',
	description: 'One stop for all home interior',
};

export default function RootLayout({ children }) {
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
					color="#6E6E6E"
					initialPosition={0.08}
					crawlSpeed={200}
					height={4}
					crawl={true}
					showSpinner={false}
					easing="ease"
					speed={200}
					shadow="0 0 10px #ffffff,0 0 5px #ffffff"
				/>
				<Analytics />
			</body>
		</html>
	);
}
