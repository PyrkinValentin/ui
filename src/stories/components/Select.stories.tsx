import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Select",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Choose one option from a portalled, positioned dropdown." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "select" },
}
