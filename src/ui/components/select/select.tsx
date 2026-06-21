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
import { Check, ChevronDown } from "lucide-react"

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