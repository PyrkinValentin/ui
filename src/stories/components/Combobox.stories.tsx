import type { Meta, StoryObj } from "@storybook/react-vite"

import { Demo } from "../Demo"

const meta: Meta<typeof Demo> = {
	title: "Components/Inputs/Combobox",
	component: Demo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: { description: { component: "Filterable select with single/multiple selection and chips." } },
	},
}

export default meta

export const Default: StoryObj<typeof Demo> = {
	args: { id: "combobox" },
}
