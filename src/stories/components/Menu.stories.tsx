import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Overlays/Menu",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A dropdown menu with items, groups, radios and checkboxes." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "menu" },
}
