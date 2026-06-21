"use client"

import type { BaseUIEvent } from "@base-ui/react"
import type { MouseEvent } from "react"
import type { TextareaGroupProps } from "./textarea-group.props"

import { toClassNames } from "../../utils"
import { focusTextareaSlot } from "./textarea-group.utils"

import { Render } from "../render"

export const TextareaGroup = (props: TextareaGroupProps) => {
	const {
		className,
		onMouseDown,
		children,
		...restProps
	} = props

	const handleMouseDown = (ev: BaseUIEvent<MouseEvent<HTMLDivElement>>) => {
		onMouseDown?.(ev)

		if (
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			focusTextareaSlot(ev)
		}
	}

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			role="group"
			className={toClassNames("textarea-group", className)}
			onMouseDown={handleMouseDown}
		>
			{children}
		</Render>
	)
}