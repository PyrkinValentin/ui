import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Overlays/PreviewCard",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Hover-triggered rich preview, like link cards." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "preview-card" },
}
