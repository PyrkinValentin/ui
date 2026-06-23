import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Radio",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A single radio control, used within a RadioGroup." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "radio" },
}
