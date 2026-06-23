import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/OTPField",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "One-time-password input split into individual character cells." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "otp-field" },
}
