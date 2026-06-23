import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Checkbox",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Binary choice with indeterminate support." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "checkbox" },
}
