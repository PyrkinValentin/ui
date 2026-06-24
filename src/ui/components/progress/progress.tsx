"use client"

import type {
	ProgressRootProps,
	ProgressLabelProps,
	ProgressValueProps,
	ProgressTrackProps,
	ProgressIndicatorProps,
} from "./progress.props"

import { toClassNames } from "../../utils"

import { Progress } from "@base-ui/react/progress"

/**
 * Groups all parts of the progress bar and provides the task completion status to screen readers.
 * Renders a `<div>` element.
 */
export const ProgressRoot = (props: ProgressRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Progress.Root
			{...restProps}
			className={toClassNames("progress", className)}
		>
			{children}
		</Progress.Root>
	)
}

/**
 * An accessible label for the progress bar.
 * Renders a `<span>` element.
 */
export const ProgressLabel = (props: ProgressLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Progress.Label
			{...restProps}
			className={toClassNames("progress__label", className)}
		>
			{children}
		</Progress.Label>
	)
}

/**
 * A text label displaying the current value.
 * Renders a `<span>` element.
 */
export const ProgressValue = (props: ProgressValueProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Progress.Value
			{...restProps}
			className={toClassNames("progress__value", className)}
		>
			{children}
		</Progress.Value>
	)
}

/**
 * Contains the progress bar indicator.
 * Renders a `<div>` element.
 */
export const ProgressTrack = (props: ProgressTrackProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Progress.Track
			{...restProps}
			className={toClassNames("progress__track", className)}
		>
			{children}
		</Progress.Track>
	)
}

/**
 * Visualizes the completion status of the task.
 * Renders a `<div>` element.
 */
export const ProgressIndicator = (props: ProgressIndicatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Progress.Indicator
			{...restProps}
			className={toClassNames("progress__indicator", className)}
		/>
	)
}