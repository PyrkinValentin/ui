"use client"

import type {
	SliderRootProps,
	SliderLabelProps,
	SliderValueProps,
	SliderControlProps,
	SliderTrackProps,
	SliderIndicatorProps,
	SliderThumbProps
} from "./slider.props"

import { toClassNames } from "../../utils"

import { Slider } from "@base-ui/react/slider"

/**
 * Groups all parts of the slider.
 * Renders a `<div>` element.
 */
export const SliderRoot = <Value extends number | readonly number[] = number | readonly number[]>(props: SliderRootProps<Value>) => {
	const {
		thumbAlignment = "edge",
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Root
			{...restProps}
			thumbAlignment={thumbAlignment}
			className={toClassNames("slider", className)}
		>
			{children}
		</Slider.Root>
	)
}

/**
 * An accessible label that is automatically associated with the slider thumbs.
 * Renders a `<div>` element.
 */
export const SliderLabel = (props: SliderLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Label
			{...restProps}
			className={toClassNames("slider__label", className)}
		>
			{children}
		</Slider.Label>
	)
}

/**
 * Displays the current value of the slider as text.
 * Renders an `<output>` element.
 */
export const SliderValue = (props: SliderValueProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Value
			{...restProps}
			className={toClassNames("slider__value", className)}
		>
			{children}
		</Slider.Value>
	)
}

/**
 * The clickable, interactive part of the slider.
 * Renders a `<div>` element.
 */
export const SliderControl = (props: SliderControlProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Control
			{...restProps}
			className={toClassNames("slider__control", className)}
		>
			{children}
		</Slider.Control>
	)
}

/**
 * Contains the slider indicator and represents the entire range of the slider.
 * Renders a `<div>` element.
 */
export const SliderTrack = (props: SliderTrackProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Track
			{...restProps}
			className={toClassNames("slider__track", className)}
		>
			{children}
		</Slider.Track>
	)
}

/**
 * Visualizes the current value of the slider.
 * Renders a `<div>` element.
 */
export const SliderIndicator = (props: SliderIndicatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Slider.Indicator
			{...restProps}
			className={toClassNames("slider__indicator", className)}
		/>
	)
}

/**
 * The draggable part of the slider at the tip of the indicator.
 * Renders a `<div>` element and a nested `<input type="range">`.
 */
export const SliderThumb = (props: SliderThumbProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Thumb
			{...restProps}
			className={toClassNames("slider__thumb", className)}
		>
			{children}
		</Slider.Thumb>
	)
}