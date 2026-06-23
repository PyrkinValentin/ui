import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/Avatar",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "User image with graceful initials fallback." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "avatar" },
}
