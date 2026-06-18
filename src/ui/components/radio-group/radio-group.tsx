"use client"

import type { RadioGroupProps } from "./radio-group.props"

import { toClassNames } from "../../utils"

import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group"

export const RadioGroup = (props: RadioGroupProps) => {
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