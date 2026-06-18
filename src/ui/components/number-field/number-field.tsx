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
import { Minus, MoveHorizontal, Plus } from "lucide-react"

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