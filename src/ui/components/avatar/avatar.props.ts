import type { AvatarRootProps as BaseAvatarRootProps } from "@base-ui/react/avatar"

export type { AvatarImageProps, AvatarFallbackProps } from "@base-ui/react/avatar"

export type AvatarRootProps = BaseAvatarRootProps & {
	/**
	 * The size of the component.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
	/**
	 * The color theme of the component.
	 * @default "neutral"
	 */
	color?: "neutral" | "info" | "success" | "warning" | "error"
}