"use client"

import type { ChipProps } from "./chip.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Render } from "../../primitives"

/**
 * A compact element used to display tags, categories, or status labels.
 * Renders a `<span>` element.
 */
export const Chip = (props: ChipProps) => {
	const {
		variant = "primary",
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