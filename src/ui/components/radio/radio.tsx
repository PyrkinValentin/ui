"use client"

import type { RadioRootProps, RadioIndicatorProps } from "./radio.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Radio } from "@base-ui/react/radio"

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

export const RadioIndicator = (props: RadioIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	const dot = !children

	return (
		<Radio.Indicator
			{...restProps}
			{...toDataAttrs({ dot })}
			keepMounted={keepMounted}
			className={toClassNames("radio__indicator", className)}
		>
			{children}
		</Radio.Indicator>
	)
}