import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/Separator",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A thin divider between content, horizontal or vertical." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "separator" },
}
