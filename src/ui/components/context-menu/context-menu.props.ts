import type { ContextMenuItemProps as BaseContextMenuItemProps } from "@base-ui/react/context-menu"

export type { SeparatorProps as ContextMenuSeparatorProps } from "@base-ui/react/separator"

export type {
	ContextMenuRootProps,
	ContextMenuTriggerProps,
	ContextMenuPortalProps,
	ContextMenuBackdropProps,
	ContextMenuPositionerProps,
	ContextMenuPopupProps,
	ContextMenuArrowProps,
	ContextMenuLinkItemProps,
	ContextMenuSubmenuRootProps,
	ContextMenuSubmenuTriggerProps,
	ContextMenuGroupProps,
	ContextMenuGroupLabelProps,
	ContextMenuRadioGroupProps,
	ContextMenuRadioItemProps,
	ContextMenuRadioItemIndicatorProps,
	ContextMenuCheckboxItemProps,
	ContextMenuCheckboxItemIndicatorProps,
} from "@base-ui/react/context-menu"

export type ContextMenuItemProps = BaseContextMenuItemProps & {
	/**
	 * The visual style of the component.
	 * @default "primary"
	 */
	variant?: "primary" | "error"
}