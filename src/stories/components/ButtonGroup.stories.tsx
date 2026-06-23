import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Actions/ButtonGroup",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Visually join related buttons into a single segmented control." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "button-group" },
}
