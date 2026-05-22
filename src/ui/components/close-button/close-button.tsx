"use client"

import type { CloseButtonProps } from "./close-button.props"

import { applyCn, toDataAttrs } from "../../utils"

import { Button } from "@base-ui/react/button"
import { X } from "lucide-react"

export const CloseButton = (props: CloseButtonProps) => {
	const {
		floating,
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<Button
			{...restProps}
			{...toDataAttrs({ floating, size })}
			data-slot="close-button"
			className={applyCn("close-button", className)}
		>
			{children ?? <X/>}
		</Button>
	)
}

CloseButton.displayName = "CloseButton"