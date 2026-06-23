import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/Skeleton",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Placeholder shimmer while content is loading." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "skeleton" },
}
