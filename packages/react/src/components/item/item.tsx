"use client"

import type {
	ItemRootProps,
	ItemMediaProps,
	ItemContentProps,
	ItemTitleProps,
	ItemDescriptionProps,
	ItemActionProps,
} from "./item.props"

import { toClassNames } from "../../utils"

import { Render } from "../../primitives"

/**
 * The root container for generic list or menu items holding layout and styling.
 * Renders a `<div>` element.
 */
export const ItemRoot = (props: ItemRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("item", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A container for visual media like icons, avatars, or images inside the item.
 * Renders a `<span>` element.
 */
export const ItemMedia = (props: ItemMediaProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			className={toClassNames("item__media", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A wrapper container for the textual content of the item.
 * Renders a `<div>` element.
 */
export const ItemContent = (props: ItemContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("item__content", className)}
		>
			{children}
		</Render>
	)
}

/**
 * The primary text title displayed within the item content.
 * Renders an `<h2>` element.
 */
export const ItemTitle = (props: ItemTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="h2"
			className={toClassNames("item__title", className)}
		>
			{children}
		</Render>
	)
}

/**
 * The secondary text description providing additional details about the item.
 * Renders a `<p>` element.
 */
export const ItemDescription = (props: ItemDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="p"
			className={toClassNames("item__description", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A container for interactive elements or buttons placed at the end of the item.
 * Renders a `<div>` element.
 */
export const ItemAction = (props: ItemActionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("item__action", className)}
		>
			{children}
		</Render>
	)
}