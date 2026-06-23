import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/Item",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A list row with media, content and trailing actions." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "item" },
}
