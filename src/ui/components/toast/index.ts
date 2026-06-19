import { useToastManager } from "./toast.hooks"

import { createToastManager } from "./toast.utils"

import {
	ToastProvider,
	ToastPortal,
	ToastViewport,
	ToastPositioner,
	ToastRoot,
	ToastArrow,
	ToastContent,
	ToastIndicator,
	ToastTitle,
	ToastDescription,
	ToastAction,
	ToastClose,
} from "./toast"

export const Toast = {
	Provider: ToastProvider,
	Portal: ToastPortal,
	Viewport: ToastViewport,
	Positioner: ToastPositioner,
	Root: ToastRoot,
	Arrow: ToastArrow,
	Content: ToastContent,
	Indicator: ToastIndicator,
	Title: ToastTitle,
	Description: ToastDescription,
	Action: ToastAction,
	Close: ToastClose,
	useManager: useToastManager,
	createManager: createToastManager,
} as const