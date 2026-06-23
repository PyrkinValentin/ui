import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Field",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Wire a label, control, description and validation message together." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "field" },
}
