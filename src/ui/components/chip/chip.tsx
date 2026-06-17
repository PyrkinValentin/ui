"use client"

import type { ChipProps } from "./chip.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Render } from "../render"

export const Chip = (props: ChipProps) => {
	const {
		variant = "secondary",
		color = "neutral",
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ variant, color })}
			defaultTagName="span"
			className={toClassNames("chip", className)}
		>
			{children}
		</Render>
	)
}

Chip.displayName = "Chip"