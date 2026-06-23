import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/Chip",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Compact label for tags, categories and statuses." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "chip" },
}
