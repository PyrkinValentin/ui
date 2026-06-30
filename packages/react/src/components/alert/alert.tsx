"use client"

import type {
	AlertRootProps,
	AlertIndicatorProps,
	AlertContentProps,
	AlertTitleProps,
	AlertDescriptionProps,
	AlertCloseProps,
} from "./alert.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { STATUS_INDICATORS } from "../../constants"

import { Button } from "@base-ui/react/button"
import { X } from "lucide-react"
import { Render } from "../../primitives"

/**
 * The root container that provides context for the alert components.
 * Renders a `<div>` element.
 */
export const AlertRoot = (props: AlertRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			role="alert"
			className={toClassNames("alert", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A visual icon representing the status or severity of the alert.
 * Renders a `<span>` element.
 */
export const AlertIndicator = (props: AlertIndicatorProps) => {
	const {
		status = "neutral",
		className,
		children,
		...restProps
	} = props

	const Indicator = STATUS_INDICATORS[status]

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ status })}
			defaultTagName="span"
			className={toClassNames("alert__indicator", className)}
		>
			{children ?? <Indicator/>}
		</Render>
	)
}

/**
 * A wrapper container for the alert's textual elements like title and description.
 * Renders a `<div>` element.
 */
export const AlertContent = (props: AlertContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("alert__content", className)}
		>
			{children}
		</Render>
	)
}

/**
 * The heading or primary message title of the alert.
 * Renders an `<h2>` element.
 */
export const AlertTitle = (props: AlertTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="h2"
			className={toClassNames("alert__title", className)}
		>
			{children}
		</Render>
	)
}

/**
 * The detailed body text or secondary message explaining the alert.
 * Renders a `<p>` element.
 */
export const AlertDescription = (props: AlertDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="p"
			className={toClassNames("alert__description", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A button that dismisses or closes the alert notification.
 * Renders a `<button>` element.
 */
export const AlertClose = (props: AlertCloseProps) => {
	const {
		nativeClose = true,
		className,
		children,
		...restProps
	} = props

	return (
		<Button
			{...restProps}
			{...toDataAttrs({ nativeClose })}
			className={toClassNames("alert__close", className)}
		>
			{children ?? (
				nativeClose
					? <X/>
					: null
			)}
		</Button>
	)
}