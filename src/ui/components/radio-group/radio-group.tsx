"use client"

import type { RadioGroupProps } from "./radio-group.props"

import { toClassNames } from "../../utils"

import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group"

/**
 * Provides a shared state to a series of radio buttons.
 * Renders a `<div>` element.
 */
export const RadioGroup = <Value = unknown>(props: RadioGroupProps<Value>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<BaseRadioGroup
			{...restProps}
			className={toClassNames("radio-group", className)}
		>
			{children}
		</BaseRadioGroup>
	)
}