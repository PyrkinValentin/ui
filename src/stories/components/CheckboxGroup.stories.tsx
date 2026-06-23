import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/CheckboxGroup",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Manage a set of related checkboxes with a shared value." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "checkbox-group" },
}
