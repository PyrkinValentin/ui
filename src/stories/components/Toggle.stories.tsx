import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Actions/Toggle",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A two-state button that can be pressed on or off." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "toggle" },
}
