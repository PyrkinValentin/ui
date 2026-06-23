import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Actions/ToggleGroup",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Group of toggles with single or multiple selection." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "toggle-group" },
}
