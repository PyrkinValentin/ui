import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Input",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A styled text field with focus, hover and invalid states." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "input" },
}
