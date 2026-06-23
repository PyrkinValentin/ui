import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/TextareaGroup",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Textarea composed with counters, toolbars or addons." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "textarea-group" },
}
