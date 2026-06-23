import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Navigation/NavigationMenu",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "A site navigation menu with rich, animated panels." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "navigation-menu" },
}
