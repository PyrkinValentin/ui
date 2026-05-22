"use client"

import type { InputProps } from "./input.props"

import { applyCn, toDataAttrs } from "../../utils"

import { Input as BaseUIInput } from "@base-ui/react/input"

export const Input = (props: InputProps) => {
	const {
		variant = "primary",
		size = "md",
		className,
		...restProps
	} = props

	return (
		<BaseUIInput
			{...restProps}
			{...toDataAttrs({ variant, size })}
			data-slot="input"
			className={applyCn("input", className)}
		/>
	)
}