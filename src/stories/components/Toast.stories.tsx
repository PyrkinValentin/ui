import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Feedback/Toast",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Transient notifications managed through a provider/queue." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "toast" },
}
