"use client"

import type { SpinnerProps } from "./spinner.props"

import { applyCn, toDataAttrs } from "../../utils"
import { Render } from "../render"

export const Spinner = (props: SpinnerProps) => {
	const {
		size = "md",
		color = "current",
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ size, color })}
			defaultTagName="span"
			aria-hidden={true}
			data-slot="spinner"
			className={applyCn("spinner", className)}
		>
			{children}
		</Render>
	)
}

Spinner.displayName = "Spinner"