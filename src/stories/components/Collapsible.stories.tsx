import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Navigation/Collapsible",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A single show/hide region with animated height." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "collapsible" },
}
