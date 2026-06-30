"use client"

import type {
	SelectRootProps,
	SelectLabelProps,
	SelectTriggerProps,
	SelectValueProps,
	SelectIconProps,
	SelectPortalProps,
	SelectBackdropProps,
	SelectPositionerProps,
	SelectPopupProps,
	SelectArrowProps,
	SelectListProps,
	SelectItemProps,
	SelectItemTextProps,
	SelectItemIndicatorProps,
	SelectSeparatorProps,
	SelectGroupProps,
	SelectGroupLabelProps,
} from "./select.props"

import { toClassNames } from "../../utils"

import { Select } from "@base-ui/react/select"
import { Check, ChevronDown } from "../../icons"

/**
 * Groups all parts of the select.
 * Doesn't render its own HTML element.
 */
export const SelectRoot = <Value = unknown, Multiple extends boolean | undefined = false>(props: SelectRootProps<Value, Multiple>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Select.Root {...restProps}>
			{children}
		</Select.Root>
	)
}

/**
 * An accessible label that is automatically associated with the select trigger.
 * Renders a `<div>` element.
 */
export const SelectLabel = (props: SelectLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Label
			{...restProps}
			className={toClassNames("select__label", className)}
		>
			{children}
		</Select.Label>
	)
}

/**
 * A button that opens the select popup.
 * Renders a `<button>` element.
 */
export const SelectTrigger = (props: SelectTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Trigger
			{...restProps}
			className={toClassNames("select__trigger", className)}
		>
			{children}
		</Select.Trigger>
	)
}

/**
 * A text label of the currently selected item.
 * Renders a `<span>` element.
 */
export const SelectValue = (props: SelectValueProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Value
			{...restProps}
			className={toClassNames("select__value", className)}
		>
			{children}
		</Select.Value>
	)
}

/**
 * An icon that indicates that the trigger button opens a select popup.
 * Renders a `<span>` element.
 */
export const SelectIcon = (props: SelectIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Icon
			{...restProps}
			className={toClassNames("select__icon", className)}
		>
			{children ?? <ChevronDown/>}
		</Select.Icon>
	)
}

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
export const SelectPortal = (props: SelectPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Portal
			{...restProps}
			className={toClassNames("select__portal", className)}
		>
			{children}
		</Select.Portal>
	)
}

/**
 * An overlay displayed beneath the select popup.
 * Renders a `<div>` element.
 */
export const SelectBackdrop = (props: SelectBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Backdrop
			{...restProps}
			className={toClassNames("select__backdrop", className)}
		>
			{children}
		</Select.Backdrop>
	)
}

/**
 * Positions the select popup.
 * Renders a `<div>` element.
 */
export const SelectPositioner = (props: SelectPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("select__positioner", className)}
		>
			{children}
		</Select.Positioner>
	)
}

/**
 * A container for the select list.
 * Renders a `<div>` element.
 */
export const SelectPopup = (props: SelectPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Popup
			{...restProps}
			className={toClassNames("select__popup", className)}
		>
			{children}
		</Select.Popup>
	)
}

/**
 * Displays an element positioned against the select popup anchor.
 * Renders a `<div>` element.
 */
export const SelectArrow = (props: SelectArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Select.Arrow
			{...restProps}
			className={toClassNames("select__arrow", className)}
		/>
	)
}

/**
 * A container for the select items.
 * Renders a `<div>` element.
 */
export const SelectList = (props: SelectListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.List
			{...restProps}
			className={toClassNames("select__list", className)}
		>
			{children}
		</Select.List>
	)
}

/**
 * An individual option in the select popup.
 * Renders a `<div>` element.
 */
export const SelectItem = (props: SelectItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Item
			{...restProps}
			className={toClassNames("select__item", className)}
		>
			{children}
		</Select.Item>
	)
}

/**
 * A text label of the select item.
 * Renders a `<div>` element.
 */
export const SelectItemText = (props: SelectItemTextProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.ItemText
			{...restProps}
			className={toClassNames("select__item-text", className)}
		>
			{children}
		</Select.ItemText>
	)
}

/**
 * Indicates whether the select item is selected.
 * Renders a `<span>` element.
 */
export const SelectItemIndicator = (props: SelectItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	return (
		<Select.ItemIndicator
			{...restProps}
			keepMounted={keepMounted}
			className={toClassNames("select__item-indicator", className)}
		>
			{children ?? <Check/>}
		</Select.ItemIndicator>
	)
}

/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 */
export const SelectSeparator = (props: SelectSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Select.Separator
			{...restProps}
			className={toClassNames("select__separator", className)}
		/>
	)
}

/**
 * Groups related select items with the corresponding label.
 * Renders a `<div>` element.
 */
export const SelectGroup = (props: SelectGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Group
			{...restProps}
			className={toClassNames("select__group", className)}
		>
			{children}
		</Select.Group>
	)
}

/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 */
export const SelectGroupLabel = (props: SelectGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.GroupLabel
			{...restProps}
			className={toClassNames("select__group-label", className)}
		>
			{children}
		</Select.GroupLabel>
	)
}