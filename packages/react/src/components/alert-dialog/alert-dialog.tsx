"use client"

import type {
	AlertDialogRootProps,
	AlertDialogTriggerProps,
	AlertDialogPortalProps,
	AlertDialogBackdropProps,
	AlertDialogViewportProps,
	AlertDialogPopupProps,
	AlertDialogIndicatorProps,
	AlertDialogTitleProps,
	AlertDialogDescriptionProps,
	AlertDialogActionsProps,
	AlertDialogCloseProps,
} from "./alert-dialog.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { STATUS_INDICATORS } from "../../constants"

import { AlertDialog } from "@base-ui/react/alert-dialog"
import { X } from "lucide-react"
import { Render } from "../../primitives"

/**
 * Groups all parts of the alert dialog.
 * Doesn't render its own HTML element.
 */
export const AlertDialogRoot = <Payload = unknown>(props: AlertDialogRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Root {...restProps}>
			{children}
		</AlertDialog.Root>
	)
}

/**
 * A button that opens the alert dialog.
 * Renders a `<button>` element.
 */
export const AlertDialogTrigger = <Payload = unknown>(props: AlertDialogTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Trigger
			{...restProps}
			className={toClassNames("alert-dialog__trigger", className)}
		>
			{children}
		</AlertDialog.Trigger>
	)
}

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
export const AlertDialogPortal = (props: AlertDialogPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Portal
			{...restProps}
			className={toClassNames("alert-dialog__portal", className)}
		>
			{children}
		</AlertDialog.Portal>
	)
}

/**
 * An overlay displayed beneath the popup.
 * Renders a `<div>` element.
 */
export const AlertDialogBackdrop = (props: AlertDialogBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Backdrop
			{...restProps}
			className={toClassNames("alert-dialog__backdrop", className)}
		>
			{children}
		</AlertDialog.Backdrop>
	)
}

/**
 * A positioning container for the dialog popup that can be made scrollable.
 * Renders a `<div>` element.
 */
export const AlertDialogViewport = (props: AlertDialogViewportProps) => {
	const {
		position = "center",
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Viewport
			{...restProps}
			{...toDataAttrs({ position })}
			className={toClassNames("alert-dialog__viewport", className)}
		>
			{children}
		</AlertDialog.Viewport>
	)
}

/**
 * A container for the dialog contents.
 * Renders a `<div>` element.
 */
export const AlertDialogPopup = (props: AlertDialogPopupProps) => {
	const {
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Popup
			{...restProps}
			{...toDataAttrs({ size })}
			className={toClassNames("alert-dialog__popup", className)}
		>
			{children}
		</AlertDialog.Popup>
	)
}

/**
 * A visual icon representing the status or severity of the alert dialog.
 * Renders a `<span>` element.
 */
export const AlertDialogIndicator = (props: AlertDialogIndicatorProps) => {
	const {
		status = "neutral",
		className,
		children,
		...restProps
	} = props

	const Indicator = STATUS_INDICATORS[status]

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ status })}
			defaultTagName="span"
			className={toClassNames("alert-dialog__indicator", className)}
		>
			{children ?? <Indicator/>}
		</Render>
	)
}

/**
 * A heading that labels the dialog.
 * Renders an `<h2>` element.
 */
export const AlertDialogTitle = (props: AlertDialogTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Title
			{...restProps}
			className={toClassNames("alert-dialog__title", className)}
		>
			{children}
		</AlertDialog.Title>
	)
}

/**
 * A paragraph with additional information about the dialog.
 * Renders a `<p>` element.
 */
export const AlertDialogDescription = (props: AlertDialogDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Description
			{...restProps}
			className={toClassNames("alert-dialog__description", className)}
		>
			{children}
		</AlertDialog.Description>
	)
}

/**
 * A wrapper container for the action buttons inside the dialog.
 * Renders a `<div>` element.
 */
export const AlertDialogActions = (props: AlertDialogActionsProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			role="group"
			className={toClassNames("alert-dialog__actions", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A button that closes the dialog.
 * Renders a `<button>` element.
 */
export const AlertDialogClose = (props: AlertDialogCloseProps) => {
	const {
		nativeClose,
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Close
			{...restProps}
			{...toDataAttrs({ nativeClose })}
			className={toClassNames("alert-dialog__close", className)}
		>
			{children ?? (
				nativeClose
					? <X/>
					: null
			)}
		</AlertDialog.Close>
	)
}