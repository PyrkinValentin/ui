import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/Spinner",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "An indeterminate loading indicator." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "spinner" },
}
