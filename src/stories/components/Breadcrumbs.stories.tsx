import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Navigation/Breadcrumbs",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Show the user's location in a hierarchy." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "breadcrumbs" },
}
