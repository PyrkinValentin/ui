"use client"

import type { CheckboxGroupProps } from "./checkbox-group.props"

import { toClassNames } from "../../utils"

import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group"

/**
 * Provides a shared state to a series of checkboxes.
 */
export const CheckboxGroup = (props: CheckboxGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<BaseCheckboxGroup
			{...restProps}
			className={toClassNames("checkbox-group", className)}
		>
			{children}
		</BaseCheckboxGroup>
	)
}