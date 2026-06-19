"use client"

import {
	MenuRootProps,
	MenuTriggerProps,
	MenuPortalProps,
	MenuBackdropProps,
	MenuPositionerProps,
	MenuPopupProps,
	MenuArrowProps,
	MenuViewportProps,
	MenuItemProps,
	MenuLinkItemProps,
	MenuSeparatorProps,
	MenuSubmenuRootProps,
	MenuSubmenuTriggerProps,
	MenuGroupProps,
	MenuGroupLabelProps,
	MenuRadioGroupProps,
	MenuRadioItemProps,
	MenuRadioItemIndicatorProps,
	MenuCheckboxItemProps,
	MenuCheckboxItemIndicatorProps,
} from "./menu.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Menu } from "@base-ui/react/menu"
import { Check } from "lucide-react"

export const MenuRoot = <Payload = unknown>(props: MenuRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Menu.Root {...restProps}>
			{children}
		</Menu.Root>
	)
}

export const MenuTrigger = <Payload = unknown>(props: MenuTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Trigger
			{...restProps}
			className={toClassNames("menu__trigger", className)}
		>
			{children}
		</Menu.Trigger>
	)
}

export const MenuPortal = (props: MenuPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Portal
			{...restProps}
			className={toClassNames("menu__portal", className)}
		>
			{children}
		</Menu.Portal>
	)
}

export const MenuBackdrop = (props: MenuBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Backdrop
			{...restProps}
			className={toClassNames("menu__backdrop", className)}
		>
			{children}
		</Menu.Backdrop>
	)
}

export const MenuPositioner = (props: MenuPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("menu__positioner", className)}
		>
			{children}
		</Menu.Positioner>
	)
}

export const MenuPopup = (props: MenuPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Popup
			{...restProps}
			className={toClassNames("menu__popup", className)}
		>
			{children}
		</Menu.Popup>
	)
}

export const MenuArrow = (props: MenuArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Menu.Arrow
			{...restProps}
			className={toClassNames("menu__arrow", className)}
		/>
	)
}

export const MenuViewport = (props: MenuViewportProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Viewport
			{...restProps}
			className={toClassNames("menu__viewport", className)}
		>
			{children}
		</Menu.Viewport>
	)
}

export const MenuItem = (props: MenuItemProps) => {
	const {
		variant = "primary",
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Item
			{...restProps}
			{...toDataAttrs({ variant })}
			className={toClassNames("menu__item", className)}
		>
			{children}
		</Menu.Item>
	)
}

export const MenuLinkItem = (props: MenuLinkItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.LinkItem
			{...restProps}
			className={toClassNames("menu__link-item", className)}
		>
			{children}
		</Menu.LinkItem>
	)
}

export const MenuSeparator = (props: MenuSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Menu.Separator
			{...restProps}
			className={toClassNames("menu__separator", className)}
		/>
	)
}

export const MenuSubmenuRoot = (props: MenuSubmenuRootProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Menu.SubmenuRoot {...restProps}>
			{children}
		</Menu.SubmenuRoot>
	)
}

export const MenuSubmenuTrigger = (props: MenuSubmenuTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.SubmenuTrigger
			{...restProps}
			className={toClassNames("menu__submenu-trigger", className)}
		>
			{children}
		</Menu.SubmenuTrigger>
	)
}

export const MenuGroup = (props: MenuGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Group
			{...restProps}
			className={toClassNames("menu__group", className)}
		>
			{children}
		</Menu.Group>
	)
}

export const MenuGroupLabel = (props: MenuGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.GroupLabel
			{...restProps}
			className={toClassNames("menu__group-label", className)}
		>
			{children}
		</Menu.GroupLabel>
	)
}

export const MenuRadioGroup = (props: MenuRadioGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.RadioGroup
			{...restProps}
			className={toClassNames("menu__radio-group", className)}
		>
			{children}
		</Menu.RadioGroup>
	)
}

export const MenuRadioItem = (props: MenuRadioItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.RadioItem
			{...restProps}
			className={toClassNames("menu__radio-item", className)}
		>
			{children}
		</Menu.RadioItem>
	)
}

export const MenuRadioItemIndicator = (props: MenuRadioItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	const nativeIndicator = !children

	return (
		<Menu.RadioItemIndicator
			{...restProps}
			{...toDataAttrs({ nativeIndicator })}
			keepMounted={keepMounted}
			className={toClassNames("menu__radio-item-indicator", className)}
		>
			{children}
		</Menu.RadioItemIndicator>
	)
}

export const MenuCheckboxItem = (props: MenuCheckboxItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.CheckboxItem
			{...restProps}
			className={toClassNames("menu__checkbox-item", className)}
		>
			{children}
		</Menu.CheckboxItem>
	)
}

export const MenuCheckboxItemIndicator = (props: MenuCheckboxItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.CheckboxItemIndicator
			{...restProps}
			keepMounted={keepMounted}
			className={toClassNames("menu__checkbox-item-indicator", className)}
		>
			{children ?? <Check/>}
		</Menu.CheckboxItemIndicator>
	)
}