"use client"

import type {
	TooltipProviderProps,
	TooltipRootProps,
	TooltipTriggerProps,
	TooltipPortalProps,
	TooltipPositionerProps,
	TooltipPopupProps,
	TooltipArrowProps,
	TooltipViewportProps,
} from "./tooltip.props"

import { toClassNames } from "../../utils"

import { Tooltip } from "@base-ui/react/tooltip"

/**
 * Provides a shared delay for multiple tooltips. The grouping logic ensures that
 * once a tooltip becomes visible, the adjacent tooltips will be shown instantly.
 */
export const TooltipProvider = (props: TooltipProviderProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Tooltip.Provider {...restProps}>
			{children}
		</Tooltip.Provider>
	)
}

/**
 * Groups all parts of the tooltip.
 * Doesn't render its own HTML element.
 */
export const TooltipRoot = <Payload = unknown>(props: TooltipRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Tooltip.Root {...restProps}>
			{children}
		</Tooltip.Root>
	)
}

/**
 * An element to attach the tooltip to.
 * Renders a `<button>` element.
 */
export const TooltipTrigger = <Payload = unknown>(props: TooltipTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Trigger
			{...restProps}
			className={toClassNames("tooltip__trigger", className)}
		>
			{children}
		</Tooltip.Trigger>
	)
}

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
export const TooltipPortal = (props: TooltipPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Portal
			{...restProps}
			className={toClassNames("tooltip__portal", className)}
		>
			{children}
		</Tooltip.Portal>
	)
}

/**
 * Positions the tooltip against the trigger.
 * Renders a `<div>` element.
 */
export const TooltipPositioner = (props: TooltipPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("tooltip__positioner", className)}
		>
			{children}
		</Tooltip.Positioner>
	)
}

/**
 * A container for the tooltip contents.
 * Renders a `<div>` element.
 */
export const TooltipPopup = (props: TooltipPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Popup
			{...restProps}
			className={toClassNames("tooltip__popup", className)}
		>
			{children}
		</Tooltip.Popup>
	)
}

/**
 * Displays an element positioned against the tooltip anchor.
 * Renders a `<div>` element.
 */
export const TooltipArrow = (props: TooltipArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Tooltip.Arrow
			{...restProps}
			className={toClassNames("tooltip__arrow", className)}
		/>
	)
}

/**
 * A viewport for displaying content transitions.
 * This component is only required if one popup can be opened by multiple triggers, its content
 * changes based on the trigger, and switching between them is animated.
 * Renders a `<div>` element.
 */
export const TooltipViewport = (props: TooltipViewportProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Viewport
			{...restProps}
			className={toClassNames("tooltip__viewport", className)}
		>
			{children}
		</Tooltip.Viewport>
	)
}