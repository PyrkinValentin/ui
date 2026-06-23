import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Textarea",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Multi-line text input with auto-resize support." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "textarea" },
}
