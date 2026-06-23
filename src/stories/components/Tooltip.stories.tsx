import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Feedback/Tooltip",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Contextual hint shown on hover or focus." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "tooltip" },
}
