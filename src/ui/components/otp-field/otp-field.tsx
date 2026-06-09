"use client"

import type { OTPFieldRootProps, OTPFieldInputProps, OTPFieldSeparatorProps } from "./otp-field.props"

import { toClassNames } from "../../utils"

import { OTPFieldPreview as OTPField } from "@base-ui/react/otp-field"
import { Minus } from "lucide-react"

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

export const OTPFieldSeparator = (props: OTPFieldSeparatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<OTPField.Separator
			{...restProps}
			className={toClassNames("otp-field__separator", className)}
		>
			{children ?? <Minus/>}
		</OTPField.Separator>
	)
}

OTPFieldRoot.displayName = "OTPField.Root"
OTPFieldInput.displayName = "OTPField.Input"
OTPFieldSeparator.displayName = "OTPField.Separator"