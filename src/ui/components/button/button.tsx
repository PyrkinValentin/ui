"use client"

import type { ButtonProps } from "./button.props"

import { applyCn, toDataAttrs } from "../../utils"

import { Button as BaseUIButton } from "@base-ui/react/button"

export const Button = (props: ButtonProps) => {
	const {
		iconOnly,
		fullWidth,
		variant = "primary",
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<BaseUIButton
			{...restProps}
			{...toDataAttrs({ iconOnly, fullWidth, variant, size })}
			data-slot="button"
			className={applyCn("button", className)}
		>
			{children}
		</BaseUIButton>
	)
}

Button.displayName = "Button"