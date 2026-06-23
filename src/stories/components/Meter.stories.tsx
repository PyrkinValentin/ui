import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/Meter",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Visualize a measured value within a known range." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "meter" },
}
