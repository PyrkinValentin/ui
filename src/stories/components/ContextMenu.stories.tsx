import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Overlays/ContextMenu",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Right-click menu sharing the Menu anatomy." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "context-menu" },
}
