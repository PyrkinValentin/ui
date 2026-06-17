"use client"

import type { SwitchRootProps, SwitchThumbProps } from "./switch.props"

import { toClassNames } from "../../utils"

import { Switch } from "@base-ui/react/switch"

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

SwitchRoot.displayName = "Switch.Root"
SwitchThumb.displayName = "Switch.Thumb"