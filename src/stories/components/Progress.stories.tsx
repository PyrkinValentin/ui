import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/Progress",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Show completion of a task, determinate or indeterminate." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "progress" },
}
