"use client"

import type { SwitchRootProps, SwitchThumbProps } from "./switch.props"

import { toClassNames } from "../../utils"

import { Switch } from "@base-ui/react/switch"

/**
 * Represents the switch itself.
 * Renders a `<span>` element and a hidden `<input>` beside.
 */
export const SwitchRoot = (props: SwitchRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Switch.Root
			{...restProps}
			className={toClassNames("switch", className)}
		>
			{children}
		</Switch.Root>
	)
}

/**
 * The movable part of the switch that indicates whether the switch is on or off.
 * Renders a `<span>`.
 */
export const SwitchThumb = (props: SwitchThumbProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Switch.Thumb
			{...restProps}
			className={toClassNames("switch__thumb", className)}
		>
			{children}
		</Switch.Thumb>
	)
}