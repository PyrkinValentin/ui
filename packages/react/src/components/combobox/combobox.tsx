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
import { Check, ChevronDown, X } from "../../icons"

/**
 * Groups all parts of the combobox.
 * Doesn't render its own HTML element.
 */
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

/**
 * An accessible label that is automatically associated with the combobox trigger.
 * Renders a `<div>` element.
 */
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

/**
 * A wrapper for the input and its associated controls.
 * Renders a `<div>` element.
 */
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

/**
 * A text input to search for items in the list.
 * Renders an `<input>` element.
 */
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

/**
 * A button that opens the popup.
 * Renders a `<button>` element.
 */
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

/**
 * An icon that indicates that the trigger button opens the popup.
 * Renders a `<span>` element.
 */
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

/**
 * Clears the value when clicked.
 * Renders a `<button>` element.
 */
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

/**
 * The current value of the combobox.
 * Doesn't render its own HTML element.
 */
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

/**
 * A container for the chips in a multiselectable input.
 * Renders a `<div>` element.
 */
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

/**
 * An individual chip that represents a value in a multiselectable input.
 * Renders a `<div>` element.
 */
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

/**
 * A button to remove a chip.
 * Renders a `<button>` element.
 */
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

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
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

/**
 * An overlay displayed beneath the popup.
 * Renders a `<div>` element.
 */
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

/**
 * Positions the popup against the trigger.
 * Renders a `<div>` element.
 */
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

/**
 * A container for the list.
 * Renders a `<div>` element.
 */
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

/**
 * Displays an element positioned against the anchor.
 * Renders a `<div>` element.
 */
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

/**
 * Displays a status message whose content changes are announced politely to screen readers.
 * Useful for conveying the status of an asynchronously loaded list.
 * This component's root element must remain mounted in the DOM to announce
 * changes consistently across screen readers. Avoid hiding or removing the
 * component itself with `display: none`, `hidden`, `aria-hidden`, or conditional
 * rendering. Prefer updating or conditionally rendering its children instead.
 * Renders a `<div>` element.
 */
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

/**
 * Renders its children only when the list is empty.
 * Requires the `items` prop on the root component.
 * Announces changes politely to screen readers.
 * This component's root element must remain mounted in the DOM to announce
 * changes consistently across screen readers. Avoid hiding or removing the
 * component itself with `display: none`, `hidden`, `aria-hidden`, or conditional
 * rendering. Prefer updating or conditionally rendering its children instead.
 * Renders a `<div>` element.
 */
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

/**
 * A list container for the items.
 * Renders a `<div>` element.
 */
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

/**
 * Displays a single row of items in a grid list.
 * Enable `grid` on the root component to turn the listbox into a grid.
 * Renders a `<div>` element.
 */
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

/**
 * An individual item in the list.
 * Renders a `<div>` element.
 */
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

/**
 * Indicates whether the item is selected.
 * Renders a `<span>` element.
 */
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

/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 */
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

/**
 * Groups related items with the corresponding label.
 * Renders a `<div>` element.
 */
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

/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 */
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

/**
 * Renders filtered list items.
 * Doesn't render its own HTML element.
 *
 * If rendering a flat list, pass a function child to the `List` component instead, which implicitly wraps it.
 */
export const ComboboxCollection = (props: ComboboxCollectionProps) => {
	const { children } = props

	return (
		<Combobox.Collection>
			{children}
		</Combobox.Collection>
	)
}