"use client"

import type { CheckboxRootProps, CheckboxIndicatorProps } from "./checkbox.props"

import { toClassNames } from "../../utils"

import { Checkbox } from "@base-ui/react/checkbox"
import { Check } from "lucide-react"

/**
 * Represents the checkbox itself.
 * Renders a `<span>` element and a hidden `<input>` beside.
 */
export const CheckboxRoot = (props: CheckboxRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Checkbox.Root
			{...restProps}
			className={toClassNames("checkbox", className)}
		>
			{children}
		</Checkbox.Root>
	)
}

/**
 * Indicates whether the checkbox is ticked.
 * Renders a `<span>` element.
 */
export const CheckboxIndicator = (props: CheckboxIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	return (
		<Checkbox.Indicator
			{...restProps}
			keepMounted={keepMounted}
			className={toClassNames("checkbox__indicator", className)}
		>
			{children ?? <Check/>}
		</Checkbox.Indicator>
	)
}