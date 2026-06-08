import { DialogHandle, createDialogHandle } from "./dialog.utils"

import {
	DialogRoot,
	DialogTrigger,
	DialogPortal,
	DialogBackdrop,
	DialogViewport,
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
	Viewport: DialogViewport,
	Popup: DialogPopup,
	Title: DialogTitle,
	Description: DialogDescription,
	Actions: DialogActions,
	Close: DialogClose,
	Handle: DialogHandle,
	createHandle: createDialogHandle,
} as const