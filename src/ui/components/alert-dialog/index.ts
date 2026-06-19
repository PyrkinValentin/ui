import { createAlertDialogHandle } from "./alert-dialog.utils"

import {
	AlertDialogRoot,
	AlertDialogTrigger,
	AlertDialogPortal,
	AlertDialogBackdrop,
	AlertDialogViewport,
	AlertDialogPopup,
	AlertDialogIndicator,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogActions,
	AlertDialogClose
} from "./alert-dialog"

export const AlertDialog = {
	Root: AlertDialogRoot,
	Trigger: AlertDialogTrigger,
	Portal: AlertDialogPortal,
	Backdrop: AlertDialogBackdrop,
	Viewport: AlertDialogViewport,
	Popup: AlertDialogPopup,
	Indicator: AlertDialogIndicator,
	Title: AlertDialogTitle,
	Description: AlertDialogDescription,
	Actions: AlertDialogActions,
	Close: AlertDialogClose,
	createHandle: createAlertDialogHandle,
} as const