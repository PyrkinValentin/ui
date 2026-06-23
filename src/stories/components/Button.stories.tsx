import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Actions/Button",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Trigger actions with five variants and three sizes. Icon-only mode included." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "button" },
}
