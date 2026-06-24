"use client"

import type {
	MeterRootProps,
	MeterLabelProps,
	MeterValueProps,
	MeterTrackProps,
	MeterIndicatorProps,
} from "./meter.props"

import { toClassNames } from "../../utils"

import { Meter } from "@base-ui/react/meter"

/**
 * Groups all parts of the meter and provides the value for screen readers.
 * Renders a `<div>` element.
 */
export const MeterRoot = (props: MeterRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Meter.Root
			{...restProps}
			className={toClassNames("meter", className)}
		>
			{children}
		</Meter.Root>
	)
}

/**
 * An accessible label for the meter.
 * Renders a `<span>` element.
 */
export const MeterLabel = (props: MeterLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Meter.Label
			{...restProps}
			className={toClassNames("meter__label", className)}
		>
			{children}
		</Meter.Label>
	)
}

/**
 * A text element displaying the current value.
 * Renders a `<span>` element.
 */
export const MeterValue = (props: MeterValueProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Meter.Value
			{...restProps}
			className={toClassNames("meter__value", className)}
		>
			{children}
		</Meter.Value>
	)
}

/**
 * Contains the meter indicator and represents the entire range of the meter.
 * Renders a `<div>` element.
 */
export const MeterTrack = (props: MeterTrackProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Meter.Track
			{...restProps}
			className={toClassNames("meter__track", className)}
		>
			{children}
		</Meter.Track>
	)
}

/**
 * Visualizes the position of the value along the range.
 * Renders a `<div>` element.
 */
export const MeterIndicator = (props: MeterIndicatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Meter.Indicator
			{...restProps}
			className={toClassNames("meter__indicator", className)}
		/>
	)
}