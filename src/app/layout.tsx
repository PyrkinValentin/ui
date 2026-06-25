import type { Metadata } from "next"

import "@/ui/styles/styles.css"

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@teispace/next-themes";

const geistSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://one-ui.example"
const title = "One UI — The React UI kit that feels alive"
const description =
	"52 accessible, fully-typed React components built on Base UI. Tailwind-native, themeable with OKLCH tokens, dark mode out of the box, with a signature jelly bounce."

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title,
	description,
	applicationName: "One UI",
	keywords: [
		"React",
		"UI kit",
		"component library",
		"Base UI",
		"Tailwind CSS",
		"design system",
		"accessible components",
		"TypeScript",
	],
	openGraph: {
		type: "website",
		url: siteUrl,
		siteName: "One UI",
		title,
		description,
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
}

export default function RootLayout({
																		 children,
																	 }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			suppressHydrationWarning
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<body>
				<noscript>
					{/* Keep scroll-reveal content visible when JS is unavailable */}
					<style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
				</noscript>
				<ThemeProvider
					disableTransitionOnChange
					attribute="class"
					storage="local"
				>
					<div className="root">
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
