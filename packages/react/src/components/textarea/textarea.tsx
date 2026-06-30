"use client"

import type { InputProps } from "@base-ui/react/input"
import type { TextareaProps } from "./textarea.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Input } from "@base-ui/react/input"

/**
 * A multi-line text input field that can optionally resize automatically based on content.
 * Renders a `<textarea>` element.
 */
export const Textarea = (props: TextareaProps) => {
	const {
		autoResize,
		render,
		className,
		...restProps
	} = props

	return (
		<Input
			{...restProps as InputProps}
			{...toDataAttrs({ autoResize })}
			render={render ?? <textarea/>}
			className={toClassNames("textarea", className)}
		/>
	)
}