"use client"

import type { FieldsetRootProps, FieldsetLegendProps } from "./fieldset.props"

import { toClassNames } from "../../utils"

import { Fieldset } from "@base-ui/react/fieldset"

export const FieldsetRoot = (props: FieldsetRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Fieldset.Root
			{...restProps}
			className={toClassNames("fieldset", className)}
		>
			{children}
		</Fieldset.Root>
	)
}

export const FieldsetLegend = (props: FieldsetLegendProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Fieldset.Legend
			{...restProps}
			className={toClassNames("fieldset__legend", className)}
		>
			{children}
		</Fieldset.Legend>
	)
}