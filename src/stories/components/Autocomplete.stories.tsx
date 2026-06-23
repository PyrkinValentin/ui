import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Autocomplete",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Free-text input with an async-friendly suggestion list." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "autocomplete" },
}
