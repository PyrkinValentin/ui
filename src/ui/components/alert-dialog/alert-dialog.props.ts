import type { AlertDialogCloseProps as BaseAlertDialogCloseProps } from "@base-ui/react/alert-dialog"
import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type AlertDialogIndicatorState = object
type AlertDialogActionsState = object

export type {
	AlertDialogRootProps,
	AlertDialogTriggerProps,
	AlertDialogPortalProps,
	AlertDialogBackdropProps,
	AlertDialogPopupProps,
	AlertDialogTitleProps,
	AlertDialogDescriptionProps,
} from "@base-ui/react/alert-dialog"

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