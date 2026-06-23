"use client"

import {
	ArrowRight,
	Accessibility,
	Palette,
	Sparkles,
	Star,
	Type,
	Zap,
} from "lucide-react"

import { Button, Chip } from "@/ui/components"

import { CopyInstall, Reveal, ThemeToggle, useScrolled } from "./_landing/ui"
import { Showcase } from "./_landing/showcase"

import "./landing.css"

const NAV = [
	{ label: "Components", href: "#components" },
	{ label: "Features", href: "#features" },
	{ label: "Docs", href: "/docs" },
]

const STATS = [
	"52 components",
	"Built on Base UI",
	"Tailwind v4 native",
	"OKLCH theming",
	"Fully typed",
	"Dark mode",
	"WAI-ARIA",
	"Tree-shakeable",
]

const FEATURES = [
	{
		icon: Accessibility,
		title: "Accessible by default",
		body: "Every component is built on Base UI primitives — keyboard navigation, focus management and ARIA come for free.",
	},
	{
		icon: Palette,
		title: "OKLCH theming",
		body: "A single layer of CSS variables in a perceptual color space. Recolor the whole system by changing a handful of tokens.",
	},
	{
		icon: Sparkles,
		title: "Signature motion",
		body: "A playful jelly bounce and tasteful transitions baked in — interfaces that feel responsive and alive, not static.",
	},
	{
		icon: Type,
		title: "Fully typed",
		body: "Written in TypeScript end to end. Props extend the underlying Base UI types, so autocomplete always tells the truth.",
	},
	{
		icon: Zap,
		title: "Zero runtime CSS",
		body: "Styling is plain Tailwind utility layers compiled at build time. No CSS-in-JS, no style recalculation tax at runtime.",
	},
	{
		icon: ArrowRight,
		title: "Composable API",
		body: "Compound components with a render-prop escape hatch. Drop in as-is, or compose the parts exactly how you need them.",
	},
]

function Nav() {
	const scrolled = useScrolled(8)
	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 ${
				scrolled ? "nav-scrolled" : ""
			}`}
		>
			<nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
				<a href="#" className="group flex items-center gap-2.5">
					<span className="jelly-hover grid size-8 place-items-center rounded-lg bg-info text-info-foreground shadow-sm">
						<span className="text-sm font-bold">1</span>
					</span>
					<span className="text-base font-semibold tracking-tight text-foreground">
						One UI
					</span>
				</a>

				<div className="hidden items-center gap-7 md:flex">
					{NAV.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm text-muted transition-colors hover:text-foreground"
						>
							{item.label}
						</a>
					))}
				</div>

				<div className="flex items-center gap-2">
					<ThemeToggle />
					<Button
						variant="secondary"
						size="sm"
						className="jelly-hover hidden sm:inline-flex"
						render={
							<a href="https://github.com" target="_blank" rel="noreferrer">
								<Star className="size-4" />
								GitHub
							</a>
						}
					/>
				</div>
			</nav>
		</header>
	)
}

function Hero() {
	return (
		<section className="relative overflow-hidden px-5 pt-36 pb-20 sm:pt-44 sm:pb-28">
			<div className="aurora" aria-hidden>
				<div className="aurora__blob aurora__blob--a" />
				<div className="aurora__blob aurora__blob--b" />
				<div className="aurora__blob aurora__blob--c" />
			</div>
			<div className="grid-veil" aria-hidden />

			<div className="mx-auto flex max-w-3xl flex-col items-center text-center">
				<Reveal>
					<Chip color="info" variant="secondary" className="jelly-hover mb-6">
						<Sparkles className="size-3.5" />
						52 components · built on Base UI
					</Chip>
				</Reveal>

				<Reveal delay={80}>
					<h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
						The React UI kit
						<br />
						that feels <span className="text-gradient">alive</span>.
					</h1>
				</Reveal>

				<Reveal delay={160}>
					<p className="mt-6 max-w-xl text-pretty text-lg text-muted">
						Accessible, fully-typed components built on Base UI. Tailwind-native,
						themeable down to a single OKLCH token — with a signature jelly bounce
						that makes every interaction feel deliberate.
					</p>
				</Reveal>

				<Reveal delay={240}>
					<div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
						<Button
							variant="primary"
							size="lg"
							className="jelly-hover"
							render={<a href="#components">Explore components <ArrowRight className="size-4" /></a>}
						/>
						<CopyInstall />
					</div>
				</Reveal>
			</div>
		</section>
	)
}

function StatStrip() {
	return (
		<div className="marquee-mask relative overflow-hidden border-y border-separator py-4">
			<div className="marquee">
				{[...STATS, ...STATS].map((s, i) => (
					<span
						key={i}
						className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted"
					>
						<span className="size-1.5 rounded-full bg-info" />
						{s}
					</span>
				))}
			</div>
		</div>
	)
}

function Section({
	id,
	eyebrow,
	title,
	description,
	children,
}: {
	id?: string
	eyebrow: string
	title: string
	description: string
	children: React.ReactNode
}) {
	return (
		<section id={id} className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28">
			<div className="mx-auto mb-12 max-w-2xl text-center">
				<Reveal>
					<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-info">
						{eyebrow}
					</p>
				</Reveal>
				<Reveal delay={60}>
					<h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						{title}
					</h2>
				</Reveal>
				<Reveal delay={120}>
					<p className="mt-4 text-pretty text-muted">{description}</p>
				</Reveal>
			</div>
			{children}
		</section>
	)
}

function Features() {
	return (
		<Section
			id="features"
			eyebrow="Why One UI"
			title="Thoughtful where it counts"
			description="The boring parts — accessibility, theming, types — handled. The delightful parts — motion, polish — built in."
		>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{FEATURES.map((f, i) => (
					<Reveal key={f.title} delay={(i % 3) * 70}>
						<div className="spotlight group h-full rounded-2xl border border-separator bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
							<span className="jelly-hover mb-4 grid size-10 place-items-center rounded-xl bg-info-soft text-info">
								<f.icon className="size-5" />
							</span>
							<h3 className="mb-2 text-base font-semibold text-foreground">{f.title}</h3>
							<p className="text-sm leading-relaxed text-muted">{f.body}</p>
						</div>
					</Reveal>
				))}
			</div>
		</Section>
	)
}

function CTA() {
	return (
		<section id="docs" className="px-5 pb-28">
			<Reveal>
				<div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-separator bg-surface px-6 py-16 text-center shadow-lg sm:px-12">
					<div className="aurora" aria-hidden>
						<div className="aurora__blob aurora__blob--a" />
						<div className="aurora__blob aurora__blob--b" />
					</div>
					<h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Ship interfaces people enjoy
					</h2>
					<p className="mx-auto mt-4 max-w-md text-pretty text-muted">
						Install once, theme in minutes, and let the motion do the talking.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<CopyInstall />
						<Button
							variant="primary"
							size="lg"
							className="jelly-hover"
							render={<a href="#components">Get started <ArrowRight className="size-4" /></a>}
						/>
					</div>
				</div>
			</Reveal>
		</section>
	)
}

function Footer() {
	return (
		<footer className="border-t border-separator px-5 py-10">
			<div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
				<div className="flex items-center gap-2.5">
					<span className="grid size-7 place-items-center rounded-lg bg-info text-info-foreground">
						<span className="text-xs font-bold">1</span>
					</span>
					<span className="text-sm font-semibold text-foreground">One UI</span>
					<span className="text-sm text-muted">· built on Base UI</span>
				</div>
				<div className="flex items-center gap-6 text-sm text-muted">
					<a href="#components" className="transition-colors hover:text-foreground">Components</a>
					<a href="#features" className="transition-colors hover:text-foreground">Features</a>
					<a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">GitHub</a>
				</div>
			</div>
		</footer>
	)
}

export default function Home() {
	return (
		<main className="relative">
			<Nav />
			<Hero />
			<StatStrip />
			<Section
				id="components"
				eyebrow="Live components"
				title="Not screenshots — the real thing"
				description="Every demo below is the actual component running in your browser. Hover, toggle, drag — it all reacts."
			>
				<Showcase />
			</Section>
			<Features />
			<CTA />
			<Footer />
		</main>
	)
}
