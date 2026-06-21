"use client"

import type {
	ComboboxRootProps,
	ComboboxLabelProps,
	ComboboxInputGroupProps,
	ComboboxInputProps,
	ComboboxTriggerProps,
	ComboboxIconProps,
	ComboboxClearProps,
	ComboboxValueProps,
	ComboboxChipsProps,
	ComboboxChipProps,
	ComboboxChipRemoveProps,
	ComboboxPortalProps,
	ComboboxBackdropProps,
	ComboboxPositionerProps,
	ComboboxPopupProps,
	ComboboxArrowProps,
	ComboboxStatusProps,
	ComboboxEmptyProps,
	ComboboxListProps,
	ComboboxRowProps,
	ComboboxItemProps,
	ComboboxItemIndicatorProps,
	ComboboxSeparatorProps,
	ComboboxGroupProps,
	ComboboxGroupLabelProps,
	ComboboxCollectionProps,
} from "./combobox.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Combobox } from "@base-ui/react/combobox"
import { Check, ChevronDown, X } from "lucide-react"

export const ComboboxRoot = <Value = unknown, Multiple extends boolean | undefined = false>(props: ComboboxRootProps<Value, Multiple>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Combobox.Root {...restProps}>
			{children}
		</Combobox.Root>
	)
}

export const ComboboxLabel = (props: ComboboxLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Label
			{...restProps}
			className={toClassNames("combobox__label", className)}
		>
			{children}
		</Combobox.Label>
	)
}

export const ComboboxInputGroup = (props: ComboboxInputGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.InputGroup
			{...restProps}
			className={toClassNames("combobox__input-group", className)}
		>
			{children}
		</Combobox.InputGroup>
	)
}

export const ComboboxInput = (props: ComboboxInputProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Combobox.Input
			{...restProps}
			className={toClassNames("combobox__input", className)}
		/>
	)
}

export const ComboboxTrigger = (props: ComboboxTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Trigger
			{...restProps}
			className={toClassNames("combobox__trigger", className)}
		>
			{children}
		</Combobox.Trigger>
	)
}

export const ComboboxIcon = (props: ComboboxIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Icon
			{...restProps}
			className={toClassNames("combobox__icon", className)}
		>
			{children ?? <ChevronDown/>}
		</Combobox.Icon>
	)
}

export const ComboboxClear = (props: ComboboxClearProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Clear
			{...restProps}
			className={toClassNames("combobox__clear", className)}
		>
			{children ?? <X/>}
		</Combobox.Clear>
	)
}

export const ComboboxValue = (props: ComboboxValueProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Combobox.Value {...restProps}>
			{children}
		</Combobox.Value>
	)
}

export const ComboboxChips = (props: ComboboxChipsProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Chips
			{...restProps}
			className={toClassNames("combobox__chips", className)}
		>
			{children}
		</Combobox.Chips>
	)
}

export const ComboboxChip = (props: ComboboxChipProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Chip
			{...restProps}
			className={toClassNames("combobox__chip", className)}
		>
			{children}
		</Combobox.Chip>
	)
}

export const ComboboxChipRemove = (props: ComboboxChipRemoveProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.ChipRemove
			{...restProps}
			className={toClassNames("combobox__chip-remove", className)}
		>
			{children ?? <X/>}
		</Combobox.ChipRemove>
	)
}

export const ComboboxPortal = (props: ComboboxPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Portal
			{...restProps}
			className={toClassNames("combobox__portal", className)}
		>
			{children}
		</Combobox.Portal>
	)
}

export const ComboboxBackdrop = (props: ComboboxBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Backdrop
			{...restProps}
			className={toClassNames("combobox__backdrop", className)}
		>
			{children}
		</Combobox.Backdrop>
	)
}

export const ComboboxPositioner = (props: ComboboxPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("combobox__positioner", className)}
		>
			{children}
		</Combobox.Positioner>
	)
}

export const ComboboxPopup = (props: ComboboxPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Popup
			{...restProps}
			className={toClassNames("combobox__popup", className)}
		>
			{children}
		</Combobox.Popup>
	)
}

export const ComboboxArrow = (props: ComboboxArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Combobox.Arrow
			{...restProps}
			className={toClassNames("combobox__arrow", className)}
		/>
	)
}

export const ComboboxStatus = (props: ComboboxStatusProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const status = !!children

	return (
		<Combobox.Status
			{...restProps}
			{...toDataAttrs({ status })}
			className={toClassNames("combobox__status", className)}
		>
			{children}
		</Combobox.Status>
	)
}

export const ComboboxEmpty = (props: ComboboxEmptyProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Empty
			{...restProps}
			className={toClassNames("combobox__empty", className)}
		>
			{children}
		</Combobox.Empty>
	)
}

export const ComboboxList = (props: ComboboxListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.List
			{...restProps}
			className={toClassNames("combobox__list", className)}
		>
			{children}
		</Combobox.List>
	)
}

export const ComboboxRow = (props: ComboboxRowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Row
			{...restProps}
			className={toClassNames("combobox__row", className)}
		>
			{children}
		</Combobox.Row>
	)
}

export const ComboboxItem = (props: ComboboxItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Item
			{...restProps}
			className={toClassNames("combobox__item", className)}
		>
			{children}
		</Combobox.Item>
	)
}

export const ComboboxItemIndicator = (props: ComboboxItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.ItemIndicator
			{...restProps}
			keepMounted={keepMounted}
			className={toClassNames("combobox__item-indicator", className)}
		>
			{children ?? <Check/>}
		</Combobox.ItemIndicator>
	)
}

export const ComboboxSeparator = (props: ComboboxSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Combobox.Separator
			{...restProps}
			className={toClassNames("combobox__separator", className)}
		/>
	)
}

export const ComboboxGroup = (props: ComboboxGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Group
			{...restProps}
			className={toClassNames("combobox__group", className)}
		>
			{children}
		</Combobox.Group>
	)
}

export const ComboboxGroupLabel = (props: ComboboxGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.GroupLabel
			{...restProps}
			className={toClassNames("combobox__group-label", className)}
		>
			{children}
		</Combobox.GroupLabel>
	)
}

export const ComboboxCollection = (props: ComboboxCollectionProps) => {
	const { children } = props

	return (
		<Combobox.Collection>
			{children}
		</Combobox.Collection>
	)
}