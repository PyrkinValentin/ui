import { defineConfig } from "tsup"

const external = [
	"react",
	"react-dom",
	"@base-ui/react",
	"lucide-react",
]

// Server-safe bundle — pure utilities with no React runtime. Deliberately has NO
// "use client" banner so consumers can use these helpers in server components. Runs
// after the client build (see tsup.config.ts) with `clean: false` so it adds to the
// build dir instead of wiping the client output. Kept as a separate sequential run
// (not an array config) to avoid the dts pass racing with and deleting these types.
export default defineConfig({
	entry: {
		"utils/index": "src/utils/index.ts",
	},
	format: ["esm"],
	dts: true,
	clean: false,
	outDir: "build",
	tsconfig: "tsconfig.json",
	external,
})
