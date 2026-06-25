import { defineConfig } from "tsup"
import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives"

/**
 * Library build. Outputs tree-shakeable ESM + type declarations to `dist`.
 *
 * "use client" directives are preserved (React Server Components consumers
 * need them); React, Base UI and lucide stay external so they aren't
 * duplicated in the consumer's bundle.
 *
 * CSS is built separately — see the `build:css` script.
 */
export default defineConfig({
	entry: { index: "src/ui/index.ts" },
	format: ["esm"],
	dts: true,
	treeshake: true,
	splitting: true,
	sourcemap: true,
	clean: true,
	target: "es2020",
	external: ["react", "react-dom", "@base-ui/react", "lucide-react"],
	esbuildPlugins: [
		preserveDirectivesPlugin({
			directives: ["use client", "use server"],
			include: /\.(ts|tsx)$/,
			exclude: /node_modules/,
		}),
	],
})
