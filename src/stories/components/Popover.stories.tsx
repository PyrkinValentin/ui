import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Overlays/Popover",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Rich floating content anchored to a trigger." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "popover" },
}
