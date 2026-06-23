import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Overlays/Drawer",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A panel that slides in from an edge, with swipe-to-close." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "drawer" },
}
