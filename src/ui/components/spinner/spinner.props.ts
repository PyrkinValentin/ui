import type { UIComponentProps } from "../../types"

export type SpinnerProps = UIComponentProps<"span"> & {
	/**
	 * The size of the component, affecting padding, font size, and height.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg" | "xl" | "2xl"
	/**
	 * The color theme of the component.
	 * @default "current"
	 */
	color?: "current" | "primary" | "success" | "warning" | "danger"
}