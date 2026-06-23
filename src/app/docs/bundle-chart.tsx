"use client"

import { useState } from "react"

import { BUNDLE_ROWS, MEASURED_AT, type BundleRow } from "@/shared/bundle-data"

type Metric = "button" | "switch" | "dialog" | "select"

const METRICS: { key: Metric; label: string }[] = [
	{ key: "button", label: "Button" },
	{ key: "switch", label: "Switch" },
	{ key: "dialog", label: "Dialog / Modal" },
	{ key: "select", label: "Select" },
]

export function BundleChart() {
	const [metric, setMetric] = useState<Metric>("button")

	const rows = [...BUNDLE_ROWS]
		.filter((r) => r[metric] != null)
		.sort((a, b) => (a[metric] as number) - (b[metric] as number))
	const max = Math.max(...rows.map((r) => r[metric] as number))

	return (
		<div>
			<div className="mb-6 inline-flex flex-wrap gap-1 rounded-lg border border-separator bg-surface p-1">
				{METRICS.map((m) => (
					<button
						key={m.key}
						type="button"
						onClick={() => setMetric(m.key)}
						className={`jelly-hover rounded-md px-3 py-1.5 text-sm font-medium transition ${
							metric === m.key
								? "bg-info text-info-foreground"
								: "text-muted hover:text-foreground"
						}`}
					>
						{m.label}
					</button>
				))}
			</div>

			<div className="flex flex-col gap-2.5">
				{rows.map((r) => (
					<Bar key={r.lib} row={r} value={r[metric] as number} max={max} />
				))}
			</div>

			<p className="mt-6 text-xs text-muted">
				kB, minified + gzip, React excluded · identical esbuild settings for every
				library · measured {MEASURED_AT}. Reproduce with{" "}
				<code className="rounded bg-neutral px-1.5 py-0.5 font-mono">
					node scripts/measure-bundle.mjs
				</code>
				.
			</p>
		</div>
	)
}

function Bar({ row, value, max }: { row: BundleRow; value: number; max: number }) {
	const pct = Math.max(4, (value / max) * 100)
	return (
		<div className="flex items-center gap-3">
			<div className="w-24 shrink-0 text-right text-sm font-medium text-foreground">
				{row.lib}
			</div>
			<div className="relative h-8 flex-1 overflow-hidden rounded-md bg-neutral-soft">
				<div
					className={`flex h-full items-center justify-end rounded-md px-2.5 transition-[width] duration-500 ${
						row.self ? "bg-info" : "bg-neutral"
					}`}
					style={{ width: `${pct}%` }}
				>
					<span
						className={`text-xs font-semibold ${
							row.self ? "text-info-foreground" : "text-foreground"
						}`}
					>
						{value.toFixed(1)} kB
					</span>
				</div>
			</div>
		</div>
	)
}
