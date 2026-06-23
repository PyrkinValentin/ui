import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Overlays/Dialog",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A focused modal layer for tasks and forms." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "dialog" },
}
