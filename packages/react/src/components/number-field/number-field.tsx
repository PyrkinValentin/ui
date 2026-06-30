"use client"

import type {
	NumberFieldRootProps,
	NumberFieldScrubAreaProps,
	NumberFieldScrubAreaCursorProps,
	NumberFieldGroupProps,
	NumberFieldDecrementProps,
	NumberFieldInputProps,
	NumberFieldIncrementProps,
} from "./number-field.props"

import { toClassNames } from "../../utils"

import { NumberField } from "@base-ui/react/number-field"
import { Minus, MoveHorizontal, Plus } from "../../icons"

/**
 * Groups all parts of the number field and manages its state.
 * Renders a `<div>` element.
 */
export const NumberFieldRoot = (props: NumberFieldRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NumberField.Root
			{...restProps}
			className={toClassNames("number-field", className)}
		>
			{children}
		</NumberField.Root>
	)
}

/**
 * An interactive area where the user can click and drag to change the field value.
 * Renders a `<span>` element.
 */
export const NumberFieldScrubArea = (props: NumberFieldScrubAreaProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NumberField.ScrubArea
			{...restProps}
			className={toClassNames("number-field__scrub-area", className)}
		>
			{children}
		</NumberField.ScrubArea>
	)
}

/**
 * A custom element to display instead of the native cursor while using the scrub area.
 * Renders a `<span>` element.
 *
 * This component uses the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API), which may prompt the browser to display a related notification. It is disabled
 * in Safari to avoid a layout shift that this notification causes there.
 */
export const NumberFieldScrubAreaCursor = (props: NumberFieldScrubAreaCursorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NumberField.ScrubAreaCursor
			{...restProps}
			className={toClassNames("number-field__scrub-area-cursor", className)}
		>
			{children ?? <MoveHorizontal/>}
		</NumberField.ScrubAreaCursor>
	)
}

/**
 * Groups the input with the increment and decrement buttons.
 * Renders a `<div>` element.
 */
export const NumberFieldGroup = (props: NumberFieldGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NumberField.Group
			{...restProps}
			className={toClassNames("number-field__group", className)}
		>
			{children}
		</NumberField.Group>
	)
}

/**
 * A stepper button that decreases the field value when clicked.
 * Renders a `<button>` element.
 */
export const NumberFieldDecrement = (props: NumberFieldDecrementProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NumberField.Decrement
			{...restProps}
			className={toClassNames("number-field__decrement", className)}
		>
			{children ?? <Minus/>}
		</NumberField.Decrement>
	)
}

/**
 * The native input control in the number field.
 * Renders an `<input>` element.
 */
export const NumberFieldInput = (props: NumberFieldInputProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<NumberField.Input
			{...restProps}
			className={toClassNames("number-field__input", className)}
		/>
	)
}

/**
 * A stepper button that increases the field value when clicked.
 * Renders a `<button>` element.
 */
export const NumberFieldIncrement = (props: NumberFieldIncrementProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NumberField.Increment
			{...restProps}
			className={toClassNames("number-field__increment", className)}
		>
			{children ?? <Plus/>}
		</NumberField.Increment>
	)
}