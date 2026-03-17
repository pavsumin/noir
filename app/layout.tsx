import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-cormorant',
})

export const metadata: Metadata = {
	title: 'NOIR | Maison de Parfum',
	description:
		"Discover extraordinary fragrances crafted from the world's rarest ingredients. Each creation tells a story of passion and elegance.",
	icons: {
		icon: '/icon.png',
	},
	openGraph: {
		title: 'NOIR | Maison de Parfum',
		description:
			"Discover extraordinary fragrances crafted from the world's rarest ingredients. Each creation tells a story of passion and elegance.",
		url: 'https://noir-parfum.vercel.app',
		siteName: 'NOIR',
		images: [
			{
				url: 'https://noir-parfum.vercel.app/og-image.png',
				alt: 'NOIR | Maison de Parfum',
			},
		],
	},
}

export const viewport: Viewport = {
	themeColor: '#0a0a0a',
	width: 'device-width',
	initialScale: 1,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={cormorant.variable}>
			<body className='font-serif antialiased bg-background text-foreground'>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
