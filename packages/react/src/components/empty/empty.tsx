"use client"

import type {
	EmptyRootProps,
	EmptyIconProps,
	EmptyTitleProps,
	EmptyDescriptionProps,
} from "./empty.props"

import { toClassNames } from "../../utils"

import { Render } from "../../primitives"

/**
 * The root container used to display a placeholder when no content or data is available.
 * Renders a `<div>` element.
 */
export const EmptyRoot = (props: EmptyRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("empty", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A visual icon or illustration inside the empty state container.
 * Renders a `<span>` element.
 */
export const EmptyIcon = (props: EmptyIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			className={toClassNames("empty__icon", className)}
		>
			{children}
		</Render>
	)
}

/**
 * The heading or primary title of the empty state message.
 * Renders an `<h2>` element.
 */
export const EmptyTitle = (props: EmptyTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="h2"
			className={toClassNames("empty__title", className)}
		>
			{children}
		</Render>
	)
}

/**
 * The detailed body text explaining why the container is empty or what action to take.
 * Renders a `<p>` element.
 */
export const EmptyDescription = (props: EmptyDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="p"
			className={toClassNames("empty__description", className)}
		>
			{children}
		</Render>
	)
}