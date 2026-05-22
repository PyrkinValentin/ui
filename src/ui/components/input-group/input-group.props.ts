import type { InputProps } from "@base-ui/react/input"
import type { UIComponentProps } from "../../types"

export type InputGroupProps = UIComponentProps<"div"> & {
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

export type InputGroupInputProps = InputProps