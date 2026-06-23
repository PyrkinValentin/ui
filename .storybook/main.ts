import type { StorybookConfig } from "@storybook/react-vite"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

const here = dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
	stories: [
		"../src/stories/**/*.mdx",
		"../src/stories/**/*.stories.@(ts|tsx)",
	],
	addons: ["@storybook/addon-docs", "@storybook/addon-themes"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	async viteFinal(config) {
		const { default: tailwindcss } = await import("@tailwindcss/vite")
		config.plugins = config.plugins ?? []
		config.plugins.push(tailwindcss())
		config.resolve = config.resolve ?? {}
		config.resolve.alias = {
			...(config.resolve.alias ?? {}),
			"@": resolve(here, "../src"),
		}
		return config
	},
}

export default config
