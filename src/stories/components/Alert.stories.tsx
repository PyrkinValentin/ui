import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Feedback/Alert",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Inline message to communicate status with semantic colors." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "alert" },
}
