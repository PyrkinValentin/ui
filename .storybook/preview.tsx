import type { Preview } from "@storybook/react-vite"
import { withThemeByClassName } from "@storybook/addon-themes"

import "@/ui/styles/styles.css"

const preview: Preview = {
	parameters: {
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
		layout: "centered",
		options: {
			storySort: {
				order: ["Overview", "Bundle size", "Components"],
			},
		},
	},
	decorators: [
		withThemeByClassName({
			themes: { light: "", dark: "dark" },
			defaultTheme: "light",
		}),
		(Story) => (
			<div className="root p-6">
				<Story />
			</div>
		),
	],
}

export default preview
