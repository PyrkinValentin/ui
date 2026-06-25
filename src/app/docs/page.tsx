"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Layers, Search } from "lucide-react"

import { Input } from "@/ui/components"
import {
	CATEGORIES,
	COMPONENTS,
	type ComponentDoc,
} from "@/shared/registry"
import { ONEUI_FULL_GZIP } from "@/shared/bundle-data"

import { Reveal, ThemeToggle, useScrolled } from "../_landing/ui"
import { BundleChart } from "./bundle-chart"
import { CodeBlock } from "./code-block"

import "../landing.css"

function Nav() {
	const scrolled = useScrolled(8)
	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 ${
				scrolled ? "nav-scrolled" : ""
			}`}
		>
			<nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
				<a href="/" className="group flex items-center gap-2.5">
					<span className="jelly-hover grid size-8 place-items-center rounded-lg bg-info text-info-foreground shadow-sm">
						<span className="text-sm font-bold">1</span>
					</span>
					<span className="text-base font-semibold tracking-tight text-foreground">
						One UI <span className="font-normal text-muted">/ docs</span>
					</span>
				</a>
				<div className="flex items-center gap-4">
					<a
						href="#bundle"
						className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
					>
						Bundle size
					</a>
					<a
						href="#components"
						className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
					>
						Components
					</a>
					<a
						href="/"
						className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
					>
						<ArrowLeft className="size-4" /> Home
					</a>
					<ThemeToggle />
				</div>
			</nav>
		</header>
	)
}

function PreviewBox({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-24 flex-wrap items-center gap-3 rounded-lg border border-separator bg-background p-5">
			{children}
		</div>
	)
}

function ComponentCard({ c }: { c: ComponentDoc }) {
	return (
		<div className="spotlight group flex flex-col gap-4 rounded-2xl border border-separator bg-surface p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
			<div className="flex items-start justify-between gap-3">
				<div>
					<Link
						href={`/docs/${c.id}`}
						className="group/link inline-flex items-center gap-1 font-mono text-base font-semibold text-foreground transition-colors hover:text-info"
					>
						{c.name}
						<ArrowUpRight className="size-3.5 opacity-0 transition group-hover/link:opacity-100" />
					</Link>
					<p className="mt-1 text-sm text-muted">{c.blurb}</p>
				</div>
				<span className="shrink-0 rounded-full bg-neutral px-2.5 py-1 text-xs font-medium text-muted">
					{c.parts === 1 ? "single" : `${c.parts} parts`}
				</span>
			</div>

			{c.preview ? (
				<PreviewBox>{c.preview}</PreviewBox>
			) : (
				<div className="flex min-h-24 items-center justify-center rounded-lg border border-dashed border-separator bg-background px-5 text-center text-sm text-muted">
					Compound component — see the live example in Storybook.
				</div>
			)}

			{c.props && c.props.length > 0 && (
				<div className="flex flex-col gap-1.5">
					{c.props.map((p) => (
						<div key={p.name} className="flex items-baseline gap-2 text-xs">
							<code className="shrink-0 rounded bg-neutral px-1.5 py-0.5 font-mono text-foreground">
								{p.name}
							</code>
							<span className="text-muted">{p.values}</span>
							{p.default && (
								<span className="ml-auto shrink-0 text-muted">= {p.default}</span>
							)}
						</div>
					))}
				</div>
			)}

			<CodeBlock className="mt-auto" code={`import { ${c.importName} } from "one-ui"`} />
		</div>
	)
}

export default function Docs() {
	const [query, setQuery] = useState("")

	const grouped = useMemo(() => {
		const q = query.trim().toLowerCase()
		const match = (c: ComponentDoc) =>
			!q ||
			c.name.toLowerCase().includes(q) ||
			c.blurb.toLowerCase().includes(q) ||
			c.category.toLowerCase().includes(q)
		return CATEGORIES.map((cat) => ({
			category: cat,
			items: COMPONENTS.filter((c) => c.category === cat && match(c)),
		})).filter((g) => g.items.length > 0)
	}, [query])

	const total = COMPONENTS.length
	const shown = grouped.reduce((n, g) => n + g.items.length, 0)

	return (
		<main className="relative">
			<Nav />

			{/* Intro */}
			<section className="relative overflow-hidden px-5 pt-32 pb-12 sm:pt-40">
				<div className="aurora" aria-hidden>
					<div className="aurora__blob aurora__blob--a" />
					<div className="aurora__blob aurora__blob--b" />
				</div>
				<div className="mx-auto max-w-3xl text-center">
					<Reveal>
						<h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
							Documentation
						</h1>
					</Reveal>
					<Reveal delay={80}>
						<p className="mx-auto mt-4 max-w-xl text-pretty text-muted">
							{total} accessible components on Base UI. Tailwind-native, fully typed,
							zero runtime CSS. Browse every component below, or jump straight to the
							bundle-size comparison.
						</p>
					</Reveal>
				</div>
			</section>

			{/* Bundle comparison */}
			<section id="bundle" className="mx-auto w-full max-w-4xl scroll-mt-24 px-5 py-16">
				<Reveal>
					<div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-info">
						<Layers className="size-4" /> Bundle size
					</div>
					<h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
						Lighter than the kit you&apos;re using now
					</h2>
					<p className="mt-3 max-w-2xl text-muted">
						Cost of importing a single component, measured the same way for every
						library. One UI ships its Base UI primitive plus a paper-thin wrapper —
						and <strong className="font-medium text-foreground">zero runtime CSS</strong>,
						unlike the Emotion-based kits.
					</p>
				</Reveal>
				<Reveal delay={120}>
					<div className="mt-8 rounded-2xl border border-separator bg-surface p-6">
						<BundleChart />
					</div>
				</Reveal>
				<Reveal delay={160}>
					<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
						<Stat value="3.5 kB" label="A Button, gzipped" />
						<Stat value="~10×" label="Smaller than MUI's Button" />
						<Stat value={`${ONEUI_FULL_GZIP} kB`} label="Entire library (no tree-shaking)" />
					</div>
				</Reveal>
			</section>

			{/* Components */}
			<section id="components" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16">
				<Reveal>
					<h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
						Components
					</h2>
					<p className="mt-3 text-muted">
						Showing {shown} of {total}. Live previews render the real component;
						compound overlays are documented with their API.
					</p>
					<div className="mt-6 max-w-sm">
						<div className="flex items-center gap-2 rounded-lg border border-separator bg-surface px-3">
							<Search className="size-4 text-muted" />
							<Input
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Search components…"
								className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
							/>
						</div>
					</div>
				</Reveal>

				{grouped.map((g) => (
					<div key={g.category} className="mt-12">
						<h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted">
							{g.category}
						</h3>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							{g.items.map((c) => (
								<ComponentCard key={c.id} c={c} />
							))}
						</div>
					</div>
				))}

				{grouped.length === 0 && (
					<p className="mt-12 text-center text-muted">No components match “{query}”.</p>
				)}
			</section>

			<footer className="border-t border-separator px-5 py-10">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between text-sm text-muted">
					<span>One UI · built on Base UI</span>
					<a href="/" className="transition-colors hover:text-foreground">Back to home</a>
				</div>
			</footer>
		</main>
	)
}

function Stat({ value, label }: { value: string; label: string }) {
	return (
		<div className="rounded-xl border border-separator bg-surface p-4">
			<div className="text-2xl font-bold text-foreground">{value}</div>
			<div className="mt-1 text-sm text-muted">{label}</div>
		</div>
	)
}
