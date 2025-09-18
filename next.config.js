/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dlpegx7tp67ftrd7.public.blob.vercel-storage.com',
				port: '',
				pathname: '/products/**',
			},
			{
				protocol: 'https',
				hostname: 'dlpegx7tp67ftrd7.public.blob.vercel-storage.com',
				port: '',
				pathname: '/categories/**',
			},
		],
		qualities: [100],
	},
};

module.exports = nextConfig;
