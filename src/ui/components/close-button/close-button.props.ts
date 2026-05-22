import type { ButtonProps } from "@base-ui/react/button"

export type CloseButtonProps = ButtonProps & {
	/**
	 * If `true`, the button is positioned absolutely.
	 * Maps to `data-floating` attribute.
	 * @default false
	 */
	floating?: boolean
	/**
	 * The size of the component, affecting padding, font size, and height.
	 * @default "md"
	 */
	size?: "sm" | "md"
}