import type { Popover, PopoverCloseProps as BasePopoverCloseProps } from "@base-ui/react/popover"

export type {
	PopoverRootProps,
	PopoverTriggerProps,
	PopoverPortalProps,
	PopoverBackdropProps,
	PopoverPositionerProps,
	PopoverPopupProps,
	PopoverArrowProps,
	PopoverTitleProps,
	PopoverDescriptionProps,
} from "@base-ui/react/popover"

export type PopoverViewportProps = Popover.Viewport.Props

export type PopoverCloseProps = BasePopoverCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default false
	 */
	nativeClose?: boolean
}