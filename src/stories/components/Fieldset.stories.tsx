import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Fieldset",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Group several fields under a shared legend." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "fieldset" },
}
