/**
 * Real, reproducible bundle measurements.
 *
 * Methodology: each entry below is a single named import bundled in isolation
 * with esbuild (`bundle: true, minify: true, format: "esm"`), with
 * `react`, `react-dom` and `react/jsx-runtime` marked external, then gzipped.
 * Identical settings for every library — apples to apples.
 *
 * Reproduce locally:  `node scripts/measure-bundle.mjs`
 * Measured June 2026. Sizes are kB, min + gzip, React excluded.
 */

export type LibKey =
	| "One UI"
	| "Base UI"
	| "Radix UI"
	| "Mantine"
	| "Chakra UI"
	| "MUI"
	| "Ant Design"

export interface BundleRow {
	lib: LibKey
	/** true for the library this site documents */
	self?: boolean
	/** Short note about styling strategy / runtime cost. */
	note: string
	/** gzip kB per component; null = no equivalent primitive. */
	button: number | null
	switch: number | null
	dialog: number | null
	select: number | null
}

export const BUNDLE_ROWS: BundleRow[] = [
	{ lib: "One UI", self: true, note: "Base UI + zero-runtime CSS", button: 3.5, switch: 6.3, dialog: 24.0, select: 45.2 },
	{ lib: "Base UI", note: "headless primitives (the foundation)", button: 3.0, switch: 6.0, dialog: 22.4, select: 43.8 },
	{ lib: "Radix UI", note: "headless primitives, no Button", button: null, switch: 3.4, dialog: 11.6, select: 26.8 },
	{ lib: "Mantine", note: "CSS modules + JS runtime", button: 12.2, switch: 14.9, dialog: 25.8, select: 43.5 },
	{ lib: "Chakra UI", note: "CSS-in-JS (Emotion)", button: 13.2, switch: 21.9, dialog: 31.1, select: 44.8 },
	{ lib: "MUI", note: "CSS-in-JS (Emotion) + system", button: 36.8, switch: 36.7, dialog: 37.5, select: 53.3 },
	{ lib: "Ant Design", note: "CSS-in-JS + large core", button: 55.9, switch: 52.4, dialog: 85.4, select: 91.7 },
]

/** Per-component cost inside One UI itself (gzip kB, React external). */
export const ONEUI_COMPONENTS: { name: string; gzip: number }[] = [
	{ name: "Button", gzip: 3.5 },
	{ name: "Switch", gzip: 6.3 },
	{ name: "Checkbox", gzip: 8.9 },
	{ name: "Accordion", gzip: 10.3 },
	{ name: "Tabs", gzip: 13.0 },
	{ name: "Dialog", gzip: 24.0 },
	{ name: "Tooltip", gzip: 33.7 },
	{ name: "Select", gzip: 45.2 },
	{ name: "Combobox", gzip: 50.9 },
]

/** The whole library, bundled with no tree-shaking (all 52 components). */
export const ONEUI_FULL_GZIP = 171.5

export const MEASURED_AT = "June 2026"
