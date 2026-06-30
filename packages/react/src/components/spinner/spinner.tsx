"use client"

import type { SpinnerProps } from "./spinner.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Render } from "../../primitives"

/**
 * A visual indicator used to signal an asynchronous loading state.
 * Renders a `<span>` element.
 */
export const Spinner = (props: SpinnerProps) => {
	const {
		size = "md",
		color = "current",
		className,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ size, color })}
			defaultTagName="span"
			className={toClassNames("spinner", className)}
		/>
	)
}