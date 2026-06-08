import type {
	AlertDialogPopupProps as BaseAlertDialogPopupProps,
	AlertDialogCloseProps as BaseAlertDialogCloseProps,
} from "@base-ui/react/alert-dialog"

import type { UIComponentProps } from "../../types"

export type {
	AlertDialogRootProps,
	AlertDialogRootState,
	AlertDialogRootActions,
	AlertDialogRootChangeEventReason,
	AlertDialogRootChangeEventDetails,
	AlertDialogTriggerProps,
	AlertDialogTriggerState,
	AlertDialogPortalProps,
	AlertDialogPortalState,
	AlertDialogBackdropProps,
	AlertDialogBackdropState,
	AlertDialogViewportProps,
	AlertDialogViewportState,
	AlertDialogPopupState,
	AlertDialogTitleProps,
	AlertDialogTitleState,
	AlertDialogDescriptionProps,
	AlertDialogDescriptionState,
	AlertDialogCloseState,
} from "@base-ui/react/alert-dialog"

export type AlertDialogPopupProps = BaseAlertDialogPopupProps & {
	/**
	 * The size of the component.
	 * @default "sm"
	 */
	size?: "xs" | "sm" | "md" | "lg" | "full"
}

export type AlertDialogIndicatorState = object
export type AlertDialogIndicatorProps = UIComponentProps<"span", AlertDialogIndicatorState> & {
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "error"
}

export type AlertDialogActionsState = object
export type AlertDialogActionsProps = UIComponentProps<"div", AlertDialogActionsState>

export type AlertDialogCloseProps = BaseAlertDialogCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default false
	 */
	nativeClose?: boolean
}