"use client"

import type { ButtonProps } from "./button.props"

import { useButtonGroupContext } from "../button-group/button-group.hooks"

import { toClassNames, toDataAttrs } from "../../utils"

import { Button as BaseButton } from "@base-ui/react/button"

/**
 * A button component that can be used to trigger actions.
 * Renders a `<button>` element.
 */
export const Button = (props: ButtonProps) => {
	const contextValue = useButtonGroupContext()

	const {
		iconOnly = contextValue.iconOnly,
		variant = contextValue.variant ?? "primary",
		size = contextValue.size ?? "md",
		className,
		children,
		...restProps
	} = props

	return (
		<BaseButton
			{...restProps}
			{...toDataAttrs({ iconOnly, variant, size })}
			className={toClassNames("button", className)}
		>
			{children}
		</BaseButton>
	)
}