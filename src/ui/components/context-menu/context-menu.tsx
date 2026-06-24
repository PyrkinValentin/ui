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

/**
 * A component that creates a context menu activated by right-clicking or long pressing.
 * Doesn't render its own HTML element.
 */
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

/**
 * An area that opens the menu on right click or long press.
 * Renders a `<div>` element.
 */
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

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
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

/**
 * An overlay displayed beneath the menu popup.
 * Renders a `<div>` element.
 */
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

/**
 * Positions the menu popup against the trigger.
 * Renders a `<div>` element.
 */
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

/**
 * A container for the menu items.
 * Renders a `<div>` element.
 */
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

/**
 * Displays an element positioned against the menu anchor.
 * Renders a `<div>` element.
 */
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

/**
 * An individual interactive item in the menu.
 * Renders a `<div>` element.
 */
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

/**
 * A link in the menu that can be used to navigate to a different page or section.
 * Renders an `<a>` element.
 */
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

/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 */
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

/**
 * Groups all parts of a submenu.
 * Doesn't render its own HTML element.
 */
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

/**
 * A menu item that opens a submenu.
 * Renders a `<div>` element.
 */
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

/**
 * Groups related menu items with the corresponding label.
 * Renders a `<div>` element.
 */
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

/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 */
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

/**
 * Groups related radio items.
 * Renders a `<div>` element.
 */
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

/**
 * A menu item that works like a radio button in a given group.
 * Renders a `<div>` element.
 */
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

/**
 * Indicates whether the radio item is selected.
 * Renders a `<span>` element.
 */
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

/**
 * A menu item that toggles a setting on or off.
 * Renders a `<div>` element.
 */
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

/**
 * Indicates whether the checkbox item is ticked.
 * Renders a `<span>` element.
 */
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