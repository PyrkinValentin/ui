import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Navigation/Tabs",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Switch between views with an animated active indicator." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "tabs" },
}
