import { defineConfig } from "tsup"

const external = [
	"react",
	"react-dom",
	"@base-ui/react",
	"lucide-react",
]

// Client bundle — components and hooks rely on React state/effects and must carry the
// "use client" boundary. esbuild strips source-level directives during bundling, so we
// re-add it via the banner. This config runs first and owns `clean` for the build dir.
export default defineConfig({
	entry: {
		"index": "src/index.ts",
		"hooks/index": "src/hooks/index.ts",
	},
	format: ["esm"],
	dts: true,
	clean: true,
	outDir: "build",
	tsconfig: "tsconfig.json",
	banner: {
		js: '"use client";',
	},
	external,
})
