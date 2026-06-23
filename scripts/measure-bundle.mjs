/**
 * Reproducible bundle-size measurement.
 *
 * For each entry: bundle a single named import in isolation with esbuild
 * (bundle + minify, ESM), mark react/react-dom external, then gzip.
 * Identical settings for every library — a fair apples-to-apples comparison.
 *
 *   npm run measure
 *
 * Competitor rows only run if that package is installed. To compare against
 * everything, install them as optional dev deps first, e.g.:
 *   npm i -D @radix-ui/react-dialog @mantine/core @chakra-ui/react @mui/material antd
 */
import esbuild from "esbuild"
import { gzipSync } from "node:zlib"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const ONE = resolve(root, "src/ui/components")
const external = ["react", "react-dom", "react/jsx-runtime", "react-dom/client", "@teispace/next-themes"]

const TARGETS = {
	"One UI": {
		Button: `export {Button} from "${ONE}/button"`,
		Switch: `export {Switch} from "${ONE}/switch"`,
		Dialog: `export {Dialog} from "${ONE}/dialog"`,
		Select: `export {Select} from "${ONE}/select"`,
	},
	"Radix UI": {
		Switch: `export * from "@radix-ui/react-switch"`,
		Dialog: `export * from "@radix-ui/react-dialog"`,
		Select: `export * from "@radix-ui/react-select"`,
	},
	Mantine: {
		Button: `export {Button} from "@mantine/core"`,
		Switch: `export {Switch} from "@mantine/core"`,
		Dialog: `export {Modal} from "@mantine/core"`,
		Select: `export {Select} from "@mantine/core"`,
	},
	"Chakra UI": {
		Button: `export {Button} from "@chakra-ui/react"`,
		Switch: `export {Switch} from "@chakra-ui/react"`,
		Dialog: `export {Dialog} from "@chakra-ui/react"`,
		Select: `export {Select} from "@chakra-ui/react"`,
	},
	MUI: {
		Button: `export {default} from "@mui/material/Button"`,
		Switch: `export {default} from "@mui/material/Switch"`,
		Dialog: `export {default} from "@mui/material/Dialog"`,
		Select: `export {default} from "@mui/material/Select"`,
	},
	"Ant Design": {
		Button: `export {Button} from "antd"`,
		Switch: `export {Switch} from "antd"`,
		Dialog: `export {Modal} from "antd"`,
		Select: `export {Select} from "antd"`,
	},
}

async function gz(contents) {
	const r = await esbuild.build({
		stdin: { contents, resolveDir: root, loader: "tsx", sourcefile: "entry.tsx" },
		bundle: true,
		minify: true,
		format: "esm",
		write: false,
		external,
		jsx: "automatic",
		logLevel: "silent",
		define: { "process.env.NODE_ENV": '"production"' },
	})
	return gzipSync(r.outputFiles[0].contents).length
}

const cols = ["Button", "Switch", "Dialog", "Select"]
const pad = (s, n) => String(s).padStart(n)
console.log(pad("library", 12), cols.map((c) => pad(c, 9)).join(""), "   (kB gzip)")

for (const [lib, comps] of Object.entries(TARGETS)) {
	const cells = []
	for (const c of cols) {
		if (!comps[c]) { cells.push(pad("—", 9)); continue }
		try {
			cells.push(pad((await gz(comps[c]) / 1024).toFixed(1), 9))
		} catch {
			cells.push(pad("n/a", 9))
		}
	}
	console.log(pad(lib, 12), cells.join(""))
}
