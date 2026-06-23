import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Data display/AvatarGroup",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Overlap a set of avatars to show membership at a glance." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "avatar-group" },
}
