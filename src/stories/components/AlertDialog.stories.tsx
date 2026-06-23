import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Feedback/AlertDialog",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A modal that interrupts to confirm a destructive action." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "alert-dialog" },
}
