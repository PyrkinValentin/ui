import type {
	DrawerViewportProps as BaseDrawerViewportProps,
	DrawerPopupProps as BaseDrawerPopupProps,
	DrawerCloseProps as BaseDrawerCloseProps,
} from "@base-ui/react/drawer"

import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type DrawerHandleState = object
type DrawerActionsState = object

export type {
	DrawerRootProps,
	DrawerTriggerProps,
	DrawerSwipeAreaProps,
	DrawerPortalProps,
	DrawerBackdropProps,
	DrawerContentProps,
	DrawerTitleProps,
	DrawerDescriptionProps,
} from "@base-ui/react/drawer"

export type DrawerViewportProps = BaseDrawerViewportProps & {
	/**
	 * The positioning of the component on the screen.
	 * @default "bottom"
	 */
	position?: "top" | "bottom" | "left" | "right"
}

export type DrawerPopupProps = BaseDrawerPopupProps & {
	/**
	 * The size of the component.
	 * @note Only applies when `position` is `"left"` or `"right"`.
	 * @default "sm"
	 */
	size?: "sm" | "md" | "lg" | "full"
}

export type DrawerHandleProps = BaseUIComponentProps<"span", DrawerHandleState>
export type DrawerActionsProps = BaseUIComponentProps<"div", DrawerActionsState>

export type DrawerCloseProps = BaseDrawerCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default false
	 */
	nativeClose?: boolean
}