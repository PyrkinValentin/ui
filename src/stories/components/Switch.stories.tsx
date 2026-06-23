import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Switch",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "An on/off toggle with a sliding thumb." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "switch" },
}
