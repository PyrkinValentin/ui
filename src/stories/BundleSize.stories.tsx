import type { Meta, StoryObj } from "@storybook/react-vite"

import { BUNDLE_ROWS, MEASURED_AT, ONEUI_COMPONENTS } from "@/shared/bundle-data"

function BundleSize() {
	const max = Math.max(...BUNDLE_ROWS.map((r) => r.button ?? r.switch ?? 0))
	const rows = [...BUNDLE_ROWS]
		.map((r) => ({ ...r, v: r.button ?? r.switch ?? 0 }))
		.sort((a, b) => a.v - b.v)

	return (
		<div style={{ width: 720, maxWidth: "100%", fontFamily: "var(--font-sans)" }}>
			<h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--color-foreground)" }}>
				Bundle size — cost of one component
			</h2>
			<p style={{ color: "var(--color-muted)", marginTop: 8 }}>
				A single Button (Switch for headless libs), min + gzip, React excluded.
				Identical esbuild settings for every library. Measured {MEASURED_AT}.
			</p>

			<div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
				{rows.map((r) => (
					<div key={r.lib} style={{ display: "flex", alignItems: "center", gap: 12 }}>
						<div style={{ width: 96, textAlign: "right", fontSize: 14, fontWeight: 500, color: "var(--color-foreground)" }}>
							{r.lib}
						</div>
						<div style={{ flex: 1, height: 32, borderRadius: 8, background: "var(--color-neutral-soft)", overflow: "hidden" }}>
							<div
								style={{
									width: `${Math.max(5, (r.v / max) * 100)}%`,
									height: "100%",
									borderRadius: 8,
									display: "flex",
									alignItems: "center",
									justifyContent: "flex-end",
									paddingRight: 10,
									background: r.self ? "var(--color-info)" : "var(--color-neutral)",
									color: r.self ? "var(--color-info-foreground)" : "var(--color-foreground)",
									fontSize: 12,
									fontWeight: 600,
								}}
							>
								{r.v.toFixed(1)} kB
							</div>
						</div>
					</div>
				))}
			</div>

			<h3 style={{ fontSize: 16, fontWeight: 600, marginTop: 36, color: "var(--color-foreground)" }}>
				Per-component cost inside One UI
			</h3>
			<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 12 }}>
				{ONEUI_COMPONENTS.map((c) => (
					<div key={c.name} style={{ border: "1px solid var(--color-separator)", borderRadius: 10, padding: "10px 12px" }}>
						<div style={{ fontSize: 13, color: "var(--color-muted)" }}>{c.name}</div>
						<div style={{ fontSize: 18, fontWeight: 700, color: "var(--color-foreground)" }}>{c.gzip} kB</div>
					</div>
				))}
			</div>
		</div>
	)
}

const meta: Meta<typeof BundleSize> = {
	title: "Bundle size/Comparison",
	component: BundleSize,
	parameters: { layout: "padded" },
}

export default meta

export const Comparison: StoryObj<typeof BundleSize> = {}
