"use client"

import type { RadioRootProps, RadioIndicatorProps } from "./radio.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Radio } from "@base-ui/react/radio"

/**
 * Represents the radio button itself.
 * Renders a `<span>` element and a hidden `<input>` beside.
 */
export const RadioRoot = (props: RadioRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Radio.Root
			{...restProps}
			className={toClassNames("radio", className)}
		>
			{children}
		</Radio.Root>
	)
}

/**
 * Indicates whether the radio button is selected.
 * Renders a `<span>` element.
 */
export const RadioIndicator = (props: RadioIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	const nativeIndicator = !children

	return (
		<Radio.Indicator
			{...restProps}
			{...toDataAttrs({ nativeIndicator })}
			keepMounted={keepMounted}
			className={toClassNames("radio__indicator", className)}
		>
			{children}
		</Radio.Indicator>
	)
}