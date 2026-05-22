import type { InputProps as BaseInputProps } from "@base-ui/react/input"

export type InputProps = BaseInputProps & {
	/**
	 * The visual style of the component.
	 * @default "primary"
	 */
	variant?: "primary" | "secondary"
	/**
	 * The size of the component, affecting padding, font size, and height.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
}