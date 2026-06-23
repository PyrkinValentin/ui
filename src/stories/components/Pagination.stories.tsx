import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Navigation/Pagination",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Navigate paged data with first/prev/next controls." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "pagination" },
}
