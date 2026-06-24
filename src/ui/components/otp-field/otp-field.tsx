"use client"

import type { OTPFieldRootProps, OTPFieldInputProps, OTPFieldSeparatorProps } from "./otp-field.props"

import { toClassNames } from "../../utils"

import { OTPField } from "@base-ui/react/otp-field"

/**
 * Groups all OTP field parts and manages their state.
 * Renders a `<div>` element.
 */
export const OTPFieldRoot = (props: OTPFieldRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<OTPField.Root
			{...restProps}
			className={toClassNames("otp-field", className)}
		>
			{children}
		</OTPField.Root>
	)
}

/**
 * An individual OTP character input.
 * Renders an `<input>` element.
 */
export const OTPFieldInput = (props: OTPFieldInputProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<OTPField.Input
			{...restProps}
			className={toClassNames("otp-field__input", className)}
		/>
	)
}

/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 */
export const OTPFieldSeparator = (props: OTPFieldSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<OTPField.Separator
			{...restProps}
			className={toClassNames("otp-field__separator", className)}
		/>
	)
}