import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Overlays/Menubar",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "An application menu bar of coordinated menus." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "menubar" },
}
