import { createDialogHandle } from "./dialog.utils"

import {
	DialogRoot,
	DialogTrigger,
	DialogPortal,
	DialogBackdrop,
	DialogPopup,
	DialogTitle,
	DialogDescription,
	DialogActions,
	DialogClose
} from "./dialog"

export const Dialog = {
	Root: DialogRoot,
	Trigger: DialogTrigger,
	Portal: DialogPortal,
	Backdrop: DialogBackdrop,
	Popup: DialogPopup,
	Title: DialogTitle,
	Description: DialogDescription,
	Actions: DialogActions,
	Close: DialogClose,
	createHandle: createDialogHandle,
} as const