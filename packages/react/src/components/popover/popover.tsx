"use client"

import type {
	PopoverRootProps,
	PopoverTriggerProps,
	PopoverPortalProps,
	PopoverBackdropProps,
	PopoverPositionerProps,
	PopoverPopupProps,
	PopoverArrowProps,
	PopoverViewportProps,
	PopoverTitleProps,
	PopoverDescriptionProps,
	PopoverCloseProps,
} from "./popover.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Popover } from "@base-ui/react/popover"
import { X } from "../../icons"

/**
 * Groups all parts of the popover.
 * Doesn't render its own HTML element.
 */
export const PopoverRoot = <Payload = unknown>(props: PopoverRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Popover.Root {...restProps}>
			{children}
		</Popover.Root>
	)
}

/**
 * A button that opens the popover.
 * Renders a `<button>` element.
 */
export const PopoverTrigger = <Payload = unknown>(props: PopoverTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Trigger
			{...restProps}
			className={toClassNames("popover__trigger", className)}
		>
			{children}
		</Popover.Trigger>
	)
}

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
export const PopoverPortal = (props: PopoverPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Portal
			{...restProps}
			className={toClassNames("popover__portal", className)}
		>
			{children}
		</Popover.Portal>
	)
}

/**
 * An overlay displayed beneath the popover.
 * Renders a `<div>` element.
 */
export const PopoverBackdrop = (props: PopoverBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Backdrop
			{...restProps}
			className={toClassNames("popover__backdrop", className)}
		>
			{children}
		</Popover.Backdrop>
	)
}

/**
 * Positions the popover against the trigger.
 * Renders a `<div>` element.
 */
export const PopoverPositioner = (props: PopoverPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("popover__positioner", className)}
		>
			{children}
		</Popover.Positioner>
	)
}

/**
 * A container for the popover contents.
 * Renders a `<div>` element.
 */
export const PopoverPopup = (props: PopoverPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Popup
			{...restProps}
			className={toClassNames("popover__popup", className)}
		>
			{children}
		</Popover.Popup>
	)
}

/**
 * Displays an element positioned against the popover anchor.
 * Renders a `<div>` element.
 */
export const PopoverArrow = (props: PopoverArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Popover.Arrow
			{...restProps}
			className={toClassNames("popover__arrow", className)}
		/>
	)
}

/**
 * A viewport for displaying content transitions.
 * This component is only required if one popup can be opened by multiple triggers, its content
 * changes based on the trigger, and switching between them is animated.
 * Renders a `<div>` element.
 */
export const PopoverViewport = (props: PopoverViewportProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Viewport
			{...restProps}
			className={toClassNames("popover__viewport", className)}
		>
			{children}
		</Popover.Viewport>
	)
}

/**
 * A heading that labels the popover.
 * Renders an `<h2>` element.
 */
export const PopoverTitle = (props: PopoverTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Title
			{...restProps}
			className={toClassNames("popover__title", className)}
		>
			{children}
		</Popover.Title>
	)
}

/**
 * A paragraph with additional information about the popover.
 * Renders a `<p>` element.
 */
export const PopoverDescription = (props: PopoverDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Description
			{...restProps}
			className={toClassNames("popover__description", className)}
		>
			{children}
		</Popover.Description>
	)
}

/**
 * A button that closes the popover.
 * Renders a `<button>` element.
 */
export const PopoverClose = (props: PopoverCloseProps) => {
	const {
		nativeClose,
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Close
			{...restProps}
			{...toDataAttrs({ nativeClose })}
			className={toClassNames("popover__close", className)}
		>
			{children ?? (
				nativeClose
					? <X/>
					: null
			)}
		</Popover.Close>
	)
}