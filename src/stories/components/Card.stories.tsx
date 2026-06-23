import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/Card",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A surface for grouping related content and actions." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "card" },
}
