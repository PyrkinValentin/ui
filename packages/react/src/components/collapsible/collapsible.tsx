"use client"

import type {
	CollapsibleRootProps,
	CollapsibleTriggerProps,
	CollapsibleIconProps,
	CollapsiblePanelProps,
	CollapsibleContentProps,
} from "./collapsible.props"

import { toClassNames } from "../../utils"

import { Collapsible } from "@base-ui/react/collapsible"
import { ChevronDown } from "../../icons"
import { Render } from "../../primitives"

/**
 * Groups all parts of the collapsible.
 * Renders a `<div>` element.
 */
export const CollapsibleRoot = (props: CollapsibleRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Collapsible.Root
			{...restProps}
			className={toClassNames("collapsible", className)}
		>
			{children}
		</Collapsible.Root>
	)
}

/**
 * A button that opens and closes the collapsible panel.
 * Renders a `<button>` element.
 */
export const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Collapsible.Trigger
			{...restProps}
			className={toClassNames("collapsible__trigger", className)}
		>
			{children}
		</Collapsible.Trigger>
	)
}

/**
 * A visual indicator that changes state when the collapsible panel opens or closes.
 * Renders a `<span>` element.
 */
export const CollapsibleIcon = (props: CollapsibleIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			className={toClassNames("collapsible__icon", className)}
		>
			{children ?? <ChevronDown/>}
		</Render>
	)
}

/**
 * A panel with the collapsible contents.
 * Renders a `<div>` element.
 */
export const CollapsiblePanel = (props: CollapsiblePanelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Collapsible.Panel
			{...restProps}
			className={toClassNames("collapsible__panel", className)}
		>
			{children}
		</Collapsible.Panel>
	)
}

/**
 * A container wrapper for the internal elements inside the collapsible panel.
 * Renders a `<div>` element.
 */
export const CollapsibleContent = (props: CollapsibleContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("collapsible__content", className)}
		>
			{children}
		</Render>
	)
}