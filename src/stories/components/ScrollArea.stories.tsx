import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/ScrollArea",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Cross-browser custom scrollbars for overflowing content." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "scroll-area" },
}
