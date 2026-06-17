import { createDrawerHandle } from "./drawer.utils"

import {
	DrawerRoot,
	DrawerTrigger,
	DrawerSwipeArea,
	DrawerPortal,
	DrawerBackdrop,
	DrawerViewport,
	DrawerPopup,
	DrawerHandle,
	DrawerContent,
	DrawerTitle,
	DrawerDescription,
	DrawerActions,
	DrawerClose,
} from "./drawer"

export const Drawer = {
	Root: DrawerRoot,
	Trigger: DrawerTrigger,
	SwipeArea: DrawerSwipeArea,
	Portal: DrawerPortal,
	Backdrop: DrawerBackdrop,
	Viewport: DrawerViewport,
	Popup: DrawerPopup,
	Handle: DrawerHandle,
	Content: DrawerContent,
	Title: DrawerTitle,
	Description: DrawerDescription,
	Actions: DrawerActions,
	Close: DrawerClose,
	createHandle: createDrawerHandle,
} as const