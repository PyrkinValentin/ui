import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Slider",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Pick a value (or range) along a track." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "slider" },
}
