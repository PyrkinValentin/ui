import type { MenuItemProps as BaseMenuItemProps } from "@base-ui/react/menu"

export type { SeparatorProps as MenuSeparatorProps } from "@base-ui/react/separator"

export type {
	MenuRootProps,
	MenuTriggerProps,
	MenuPortalProps,
	MenuBackdropProps,
	MenuPositionerProps,
	MenuPopupProps,
	MenuArrowProps,
	MenuViewportProps,
	MenuLinkItemProps,
	MenuSubmenuRootProps,
	MenuSubmenuTriggerProps,
	MenuGroupProps,
	MenuGroupLabelProps,
	MenuRadioGroupProps,
	MenuRadioItemProps,
	MenuRadioItemIndicatorProps,
	MenuCheckboxItemProps,
	MenuCheckboxItemIndicatorProps,
} from "@base-ui/react/menu"

export type MenuItemProps = BaseMenuItemProps & {
	/**
	 * The visual style of the component.
	 * @default "primary"
	 */
	variant?: "primary" | "error"
}