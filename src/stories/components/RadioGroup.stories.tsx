import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/RadioGroup",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Mutually-exclusive selection from a list of options." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "radio-group" },
}
