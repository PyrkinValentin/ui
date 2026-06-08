"use client"

import type {
	ItemRootProps,
	ItemMediaProps,
	ItemContentProps,
	ItemTitleProps,
	ItemDescriptionProps,
	ItemActionsProps,
} from "./item.props"

import { toClassNames } from "../../utils"

import { Render } from "../render"

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

export const ItemActions = (props: ItemActionsProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("item__actions", className)}
		>
			{children}
		</Render>
	)
}

ItemRoot.displayName = "Item.Root"
ItemMedia.displayName = "Item.Media"
ItemContent.displayName = "Item.Content"
ItemTitle.displayName = "Item.Title"
ItemDescription.displayName = "Item.Description"
ItemActions.displayName = "Item.Actions"