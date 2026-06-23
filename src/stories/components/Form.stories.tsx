import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Form",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Form wrapper with built-in validation and error wiring." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "form" },
}
