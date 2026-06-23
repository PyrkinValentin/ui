import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/InputGroup",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Compose an input with leading/trailing addons or icons." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "input-group" },
}
