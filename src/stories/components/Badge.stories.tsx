import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/Badge",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A small status dot or count anchored to another element." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "badge" },
}
