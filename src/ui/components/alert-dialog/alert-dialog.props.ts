import type {
	AlertDialogViewportProps as BaseAlertDialogViewportProps,
	AlertDialogPopupProps as BaseAlertDialogPopupProps,
	AlertDialogCloseProps as BaseAlertDialogCloseProps,
} from "@base-ui/react/alert-dialog"

import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type AlertDialogIndicatorState = object
type AlertDialogActionsState = object

export type {
	AlertDialogRootProps,
	AlertDialogTriggerProps,
	AlertDialogPortalProps,
	AlertDialogBackdropProps,
	AlertDialogTitleProps,
	AlertDialogDescriptionProps,
} from "@base-ui/react/alert-dialog"

export type AlertDialogViewportProps = BaseAlertDialogViewportProps & {
	/**
	 * The positioning of the component on the screen.
	 * @default "center"
	 */
	position?: "top" | "center" | "bottom"
}

export type AlertDialogPopupProps = BaseAlertDialogPopupProps & {
	/**
	 * The size of the component.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg" | "full"
}

export type AlertDialogIndicatorProps = BaseUIComponentProps<"span", AlertDialogIndicatorState> & {
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "error"
}

export type AlertDialogActionsProps = BaseUIComponentProps<"div", AlertDialogActionsState>

export type AlertDialogCloseProps = BaseAlertDialogCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default false
	 */
	nativeClose?: boolean
}