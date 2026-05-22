"use client"

import type {
	AlertRootProps,
	AlertIndicatorProps,
	AlertContentProps,
	AlertTitleProps,
	AlertDescriptionProps,
} from "./alert.props"

import type { AlertProviderProps, AlertContextValue } from "./alert.types"

import { useMemo } from "react"
import { useAlertContext } from "./alert.context"

import { applyCn, toDataAttrs } from "../../utils"
import { computeAlertRole } from "./alert.utils"

import { ALERT_INDICATORS } from "./alert.vars"

import { Render } from "../render"
import { AlertContext } from "./alert.context"

const AlertProvider = (props: AlertProviderProps) => {
	const {
		variant,
		status,
		children,
	} = props

	const contextValue = useMemo<AlertContextValue>(() => ({
		variant,
		status
	}), [variant, status])

	return (
		<AlertContext value={contextValue}>
			{children}
		</AlertContext>
	)
}

export const AlertRoot = (props: AlertRootProps) => {
	const {
		variant = "primary",
		status = "neutral",
		className,
		children,
		...restProps
	} = props

	return (
		<AlertProvider
			variant={variant}
			status={status}
		>
			<Render
				{...restProps}
				{...toDataAttrs({ variant, status })}
				defaultTagName="div"
				role={computeAlertRole(status)}
				data-slot="alert"
				className={applyCn("alert", className)}
			>
				{children}
			</Render>
		</AlertProvider>
	)
}

export const AlertIndicator = (props: AlertIndicatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const { variant, status } = useAlertContext()

	const Icon = ALERT_INDICATORS[status]

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ variant, status })}
			defaultTagName="span"
			aria-hidden={true}
			data-slot="alert-indicator"
			className={applyCn("alert__indicator", className)}
		>
			{children ?? <Icon/>}
		</Render>
	)
}

export const AlertContent = (props: AlertContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const { variant, status } = useAlertContext()

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ variant, status })}
			defaultTagName="div"
			data-slot="alert-content"
			className={applyCn("alert__content", className)}
		>
			{children}
		</Render>
	)
}

export const AlertTitle = (props: AlertTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const { variant, status } = useAlertContext()

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ variant, status })}
			defaultTagName="div"
			data-slot="alert-title"
			className={applyCn("alert__title", className)}
		>
			{children}
		</Render>
	)
}

export const AlertDescription = (props: AlertDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const { variant, status } = useAlertContext()

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ variant, status })}
			defaultTagName="p"
			data-slot="alert-description"
			className={applyCn("alert__description", className)}
		>
			{children}
		</Render>
	)
}

AlertRoot.displayName = "Alert.Root"
AlertIndicator.displayName = "Alert.Indicator"
AlertContent.displayName = "Alert.Content"
AlertTitle.displayName = "Alert.Title"
AlertDescription.displayName = "Alert.Description"