"use client"

import type {
	ToolbarRootProps,
	ToolbarButtonProps,
	ToolbarLinkProps,
	ToolbarInputProps,
	ToolbarSeparatorProps,
	ToolbarGroupProps,
} from "./toolbar.props"

import { toClassNames } from "../../utils"

import { Toolbar } from "@base-ui/react/toolbar"

/**
 * A container for grouping a set of controls, such as buttons, toggle groups, or menus.
 * Renders a `<div>` element.
 */
export const ToolbarRoot = (props: ToolbarRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toolbar.Root
			{...restProps}
			className={toClassNames("toolbar", className)}
		>
			{children}
		</Toolbar.Root>
	)
}

/**
 * A button that can be used as-is or as a trigger for other components.
 * Renders a `<button>` element.
 */
export const ToolbarButton = (props: ToolbarButtonProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toolbar.Button
			{...restProps}
			className={toClassNames("toolbar__button", className)}
		>
			{children}
		</Toolbar.Button>
	)
}

/**
 * A link component.
 * Renders an `<a>` element.
 */
export const ToolbarLink = (props: ToolbarLinkProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toolbar.Link
			{...restProps}
			className={toClassNames("toolbar__link", className)}
		>
			{children}
		</Toolbar.Link>
	)
}

/**
 * A native input element that integrates with Toolbar keyboard navigation.
 * Renders an `<input>` element.
 */
export const ToolbarInput = (props: ToolbarInputProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Toolbar.Input
			{...restProps}
			className={toClassNames("toolbar__input", className)}
		/>
	)
}

/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 */
export const ToolbarSeparator = (props: ToolbarSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Toolbar.Separator
			{...restProps}
			className={toClassNames("toolbar__separator", className)}
		/>
	)
}

/**
 * Groups several toolbar items or toggles.
 * Renders a `<div>` element.
 */
export const ToolbarGroup = (props: ToolbarGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toolbar.Group
			{...restProps}
			className={toClassNames("toolbar__group", className)}
		>
			{children}
		</Toolbar.Group>
	)
}