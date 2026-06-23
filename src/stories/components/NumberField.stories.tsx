import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/NumberField",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Numeric input with increment/decrement and scrub-to-change." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "number-field" },
}
