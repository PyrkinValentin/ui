"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"

import { COMPONENTS, getComponent } from "@/shared/registry"

import { ThemeToggle, useScrolled } from "../../_landing/ui"
import { CodeBlock } from "../code-block"

import "../../landing.css"

function Header() {
	const scrolled = useScrolled(8)
	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 ${
				scrolled ? "nav-scrolled" : ""
			}`}
		>
			<nav className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-5">
				<Link href="/" className="flex items-center gap-2.5">
					<span className="jelly-hover grid size-8 place-items-center rounded-lg bg-info text-info-foreground shadow-sm">
						<span className="text-sm font-bold">1</span>
					</span>
					<span className="text-base font-semibold tracking-tight text-foreground">
						One UI <span className="font-normal text-muted">/ docs</span>
					</span>
				</Link>
				<div className="flex items-center gap-4">
					<Link href="/docs" className="text-sm text-muted transition-colors hover:text-foreground">
						All components
					</Link>
					<ThemeToggle />
				</div>
			</nav>
		</header>
	)
}

export default function ComponentPage() {
	const params = useParams()
	const id = typeof params.id === "string" ? params.id : params.id?.[0]
	const doc = id ? getComponent(id) : undefined

	if (!doc) {
		return (
			<main className="relative">
				<Header />
				<div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-5 text-center">
					<h1 className="text-2xl font-bold text-foreground">Component not found</h1>
					<p className="mt-2 text-muted">Nothing is documented under “{id}”.</p>
					<Link
						href="/docs"
						className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-info hover:underline"
					>
						<ArrowLeft className="size-4" /> Back to all components
					</Link>
				</div>
			</main>
		)
	}

	const index = COMPONENTS.findIndex((c) => c.id === doc.id)
	const prev = index > 0 ? COMPONENTS[index - 1] : undefined
	const next = index < COMPONENTS.length - 1 ? COMPONENTS[index + 1] : undefined

	return (
		<main className="relative">
			<Header />

			<section className="relative overflow-hidden px-5 pt-28 pb-10 sm:pt-32">
				<div className="aurora" aria-hidden>
					<div className="aurora__blob aurora__blob--a" />
				</div>
				<div className="mx-auto max-w-4xl">
					{/* Breadcrumb */}
					<nav className="flex items-center gap-1.5 text-sm text-muted">
						<Link href="/" className="transition-colors hover:text-foreground">Home</Link>
						<ChevronRight className="size-3.5" />
						<Link href="/docs" className="transition-colors hover:text-foreground">Docs</Link>
						<ChevronRight className="size-3.5" />
						<span className="text-foreground">{doc.name}</span>
					</nav>

					<div className="mt-5 flex flex-wrap items-center gap-3">
						<h1 className="font-mono text-4xl font-bold tracking-tight text-foreground">
							{doc.name}
						</h1>
						<span className="rounded-full bg-info-soft px-3 py-1 text-xs font-medium text-info">
							{doc.category}
						</span>
						<span className="rounded-full bg-neutral px-3 py-1 text-xs font-medium text-muted">
							{doc.parts === 1 ? "single element" : `${doc.parts} parts`}
						</span>
					</div>
					<p className="mt-3 max-w-2xl text-pretty text-lg text-muted">{doc.blurb}</p>
				</div>
			</section>

			<div className="mx-auto max-w-4xl px-5 pb-24">
				{/* Live preview */}
				<h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">
					Preview
				</h2>
				<div className="flex min-h-44 flex-wrap items-center justify-center gap-4 rounded-2xl border border-separator bg-surface p-8">
					{doc.preview ?? (
						<p className="max-w-md text-center text-sm text-muted">
							{doc.name} is a compound component with {doc.parts} parts. See the
							interactive example in Storybook.
						</p>
					)}
				</div>

				{/* Install + import */}
				<h2 className="mb-3 mt-12 text-sm font-semibold uppercase tracking-widest text-muted">
					Usage
				</h2>
				<div className="flex flex-col gap-3">
					<CodeBlock code={`npm i one-ui @base-ui/react`} />
					<CodeBlock code={`import { ${doc.importName} } from "one-ui"`} />
				</div>

				{/* Props */}
				{doc.props && doc.props.length > 0 && (
					<>
						<h2 className="mb-3 mt-12 text-sm font-semibold uppercase tracking-widest text-muted">
							Key props
						</h2>
						<div className="overflow-hidden rounded-2xl border border-separator">
							<table className="w-full text-sm">
								<thead className="bg-surface text-left text-muted">
									<tr>
										<th className="px-4 py-2.5 font-medium">Prop</th>
										<th className="px-4 py-2.5 font-medium">Values</th>
										<th className="px-4 py-2.5 font-medium">Default</th>
									</tr>
								</thead>
								<tbody>
									{doc.props.map((p) => (
										<tr key={p.name} className="border-t border-separator">
											<td className="px-4 py-2.5">
												<code className="font-mono text-foreground">{p.name}</code>
											</td>
											<td className="px-4 py-2.5 text-muted">{p.values}</td>
											<td className="px-4 py-2.5 text-muted">{p.default ?? "—"}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</>
				)}

				{/* Prev / next */}
				<div className="mt-14 flex items-stretch justify-between gap-4 border-t border-separator pt-6">
					{prev ? (
						<Link
							href={`/docs/${prev.id}`}
							className="jelly-hover group flex flex-1 flex-col rounded-xl border border-separator bg-surface px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-sm"
						>
							<span className="flex items-center gap-1 text-xs text-muted">
								<ArrowLeft className="size-3.5" /> Previous
							</span>
							<span className="mt-1 font-mono text-sm font-semibold text-foreground">{prev.name}</span>
						</Link>
					) : (
						<span className="flex-1" />
					)}
					{next ? (
						<Link
							href={`/docs/${next.id}`}
							className="jelly-hover group flex flex-1 flex-col items-end rounded-xl border border-separator bg-surface px-4 py-3 text-right transition hover:-translate-y-0.5 hover:shadow-sm"
						>
							<span className="flex items-center gap-1 text-xs text-muted">
								Next <ArrowRight className="size-3.5" />
							</span>
							<span className="mt-1 font-mono text-sm font-semibold text-foreground">{next.name}</span>
						</Link>
					) : (
						<span className="flex-1" />
					)}
				</div>
			</div>
		</main>
	)
}
