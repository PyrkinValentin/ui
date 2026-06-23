import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Navigation/Accordion",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Stacked, collapsible sections of content." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "accordion" },
}
