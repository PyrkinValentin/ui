"use client"

import {
	ContextMenuRootProps,
	ContextMenuTriggerProps,
	ContextMenuPortalProps,
	ContextMenuBackdropProps,
	ContextMenuPositionerProps,
	ContextMenuPopupProps,
	ContextMenuArrowProps,
	ContextMenuItemProps,
	ContextMenuLinkItemProps,
	ContextMenuSeparatorProps,
	ContextMenuSubmenuRootProps,
	ContextMenuSubmenuTriggerProps,
	ContextMenuGroupProps,
	ContextMenuGroupLabelProps,
	ContextMenuRadioGroupProps,
	ContextMenuRadioItemProps,
	ContextMenuRadioItemIndicatorProps,
	ContextMenuCheckboxItemProps,
	ContextMenuCheckboxItemIndicatorProps,
} from "./context-menu.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { ContextMenu } from "@base-ui/react/context-menu"
import { Check } from "lucide-react"

export const ContextMenuRoot = (props: ContextMenuRootProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<ContextMenu.Root {...restProps}>
			{children}
		</ContextMenu.Root>
	)
}

export const ContextMenuTrigger = (props: ContextMenuTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.Trigger
			{...restProps}
			className={toClassNames("context-menu__trigger", className)}
		>
			{children}
		</ContextMenu.Trigger>
	)
}

export const ContextMenuPortal = (props: ContextMenuPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.Portal
			{...restProps}
			className={toClassNames("context-menu__portal", className)}
		>
			{children}
		</ContextMenu.Portal>
	)
}

export const ContextMenuBackdrop = (props: ContextMenuBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.Backdrop
			{...restProps}
			className={toClassNames("context-menu__backdrop", className)}
		>
			{children}
		</ContextMenu.Backdrop>
	)
}

export const ContextMenuPositioner = (props: ContextMenuPositionerProps) => {
	const {
		align,
		sideOffset = 8,
		alignOffset: alignOffsetProp,
		className,
		children,
		...restProps
	} = props

	const alignOffset = alignOffsetProp ?? (
		align === "center"
			? 0
			: -20
	)

	return (
		<ContextMenu.Positioner
			{...restProps}
			align={align}
			sideOffset={sideOffset}
			alignOffset={alignOffset}
			className={toClassNames("context-menu__positioner", className)}
		>
			{children}
		</ContextMenu.Positioner>
	)
}

export const ContextMenuPopup = (props: ContextMenuPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.Popup
			{...restProps}
			className={toClassNames("context-menu__popup", className)}
		>
			{children}
		</ContextMenu.Popup>
	)
}

export const ContextMenuArrow = (props: ContextMenuArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<ContextMenu.Arrow
			{...restProps}
			className={toClassNames("context-menu__arrow", className)}
		/>
	)
}

export const ContextMenuItem = (props: ContextMenuItemProps) => {
	const {
		variant = "primary",
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.Item
			{...restProps}
			{...toDataAttrs({ variant })}
			className={toClassNames("context-menu__item", className)}
		>
			{children}
		</ContextMenu.Item>
	)
}

export const ContextMenuLinkItem = (props: ContextMenuLinkItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.LinkItem
			{...restProps}
			className={toClassNames("context-menu__link-item", className)}
		>
			{children}
		</ContextMenu.LinkItem>
	)
}

export const ContextMenuSeparator = (props: ContextMenuSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<ContextMenu.Separator
			{...restProps}
			className={toClassNames("context-menu__separator", className)}
		/>
	)
}

export const ContextMenuSubmenuRoot = (props: ContextMenuSubmenuRootProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<ContextMenu.SubmenuRoot {...restProps}>
			{children}
		</ContextMenu.SubmenuRoot>
	)
}

export const ContextMenuSubmenuTrigger = (props: ContextMenuSubmenuTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.SubmenuTrigger
			{...restProps}
			className={toClassNames("context-menu__submenu-trigger", className)}
		>
			{children}
		</ContextMenu.SubmenuTrigger>
	)
}

export const ContextMenuGroup = (props: ContextMenuGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.Group
			{...restProps}
			className={toClassNames("context-menu__group", className)}
		>
			{children}
		</ContextMenu.Group>
	)
}

export const ContextMenuGroupLabel = (props: ContextMenuGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.GroupLabel
			{...restProps}
			className={toClassNames("context-menu__group-label", className)}
		>
			{children}
		</ContextMenu.GroupLabel>
	)
}

export const ContextMenuRadioGroup = (props: ContextMenuRadioGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.RadioGroup
			{...restProps}
			className={toClassNames("context-menu__radio-group", className)}
		>
			{children}
		</ContextMenu.RadioGroup>
	)
}

export const ContextMenuRadioItem = (props: ContextMenuRadioItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.RadioItem
			{...restProps}
			className={toClassNames("context-menu__radio-item", className)}
		>
			{children}
		</ContextMenu.RadioItem>
	)
}

export const ContextMenuRadioItemIndicator = (props: ContextMenuRadioItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	const nativeIndicator = !children

	return (
		<ContextMenu.RadioItemIndicator
			{...restProps}
			{...toDataAttrs({ nativeIndicator })}
			keepMounted={keepMounted}
			className={toClassNames("context-menu__radio-item-indicator", className)}
		>
			{children}
		</ContextMenu.RadioItemIndicator>
	)
}

export const ContextMenuCheckboxItem = (props: ContextMenuCheckboxItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.CheckboxItem
			{...restProps}
			className={toClassNames("context-menu__checkbox-item", className)}
		>
			{children}
		</ContextMenu.CheckboxItem>
	)
}

export const ContextMenuCheckboxItemIndicator = (props: ContextMenuCheckboxItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	return (
		<ContextMenu.CheckboxItemIndicator
			{...restProps}
			keepMounted={keepMounted}
			className={toClassNames("context-menu__checkbox-item-indicator", className)}
		>
			{children ?? <Check/>}
		</ContextMenu.CheckboxItemIndicator>
	)
}