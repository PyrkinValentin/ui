"use client"

import type {
	ScrollAreaRootProps,
	ScrollAreaViewportProps,
	ScrollAreaContentProps,
	ScrollAreaScrollbarProps,
	ScrollAreaThumbProps,
	ScrollAreaCornerProps,
} from "./scroll-area.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { ScrollArea } from "@base-ui/react/scroll-area"

/**
 * Groups all parts of the scroll area.
 * Renders a `<div>` element.
 */
export const ScrollAreaRoot = (props: ScrollAreaRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Root
			{...restProps}
			className={toClassNames("scroll-area", className)}
		>
			{children}
		</ScrollArea.Root>
	)
}

/**
 * The actual scrollable container of the scroll area.
 * Renders a `<div>` element.
 */
export const ScrollAreaViewport = (props: ScrollAreaViewportProps) => {
	const {
		scrollFade,
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Viewport
			{...restProps}
			{...toDataAttrs({ scrollFade })}
			className={toClassNames("scroll-area__viewport", className)}
		>
			{children}
		</ScrollArea.Viewport>
	)
}

/**
 * A container for the content of the scroll area.
 * Renders a `<div>` element.
 */
export const ScrollAreaContent = (props: ScrollAreaContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Content
			{...restProps}
			className={toClassNames("scroll-area__content", className)}
		>
			{children}
		</ScrollArea.Content>
	)
}

/**
 * A vertical or horizontal scrollbar for the scroll area.
 * Renders a `<div>` element.
 */
export const ScrollAreaScrollbar = (props: ScrollAreaScrollbarProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Scrollbar
			{...restProps}
			className={toClassNames("scroll-area__scrollbar", className)}
		>
			{children}
		</ScrollArea.Scrollbar>
	)
}

/**
 * The draggable part of the scrollbar that indicates the current scroll position.
 * Renders a `<div>` element.
 */
export const ScrollAreaThumb = (props: ScrollAreaThumbProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Thumb
			{...restProps}
			className={toClassNames("scroll-area__thumb", className)}
		>
			{children}
		</ScrollArea.Thumb>
	)
}

/**
 * A small rectangular area that appears at the intersection of horizontal and vertical scrollbars.
 * Renders a `<div>` element.
 */
export const ScrollAreaCorner = (props: ScrollAreaCornerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Corner
			{...restProps}
			className={toClassNames("scroll-area__corner", className)}
		>
			{children}
		</ScrollArea.Corner>
	)
}