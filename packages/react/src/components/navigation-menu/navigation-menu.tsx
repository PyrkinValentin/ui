"use client"

import type {
	NavigationMenuRootProps,
	NavigationMenuListProps,
	NavigationMenuItemProps,
	NavigationMenuTriggerProps,
	NavigationMenuIconProps,
	NavigationMenuContentProps,
	NavigationMenuLinkProps,
	NavigationMenuPortalProps,
	NavigationMenuBackdropProps,
	NavigationMenuPositionerProps,
	NavigationMenuPopupProps,
	NavigationMenuArrowProps,
	NavigationMenuViewportProps,
} from "./navigation-menu.props"

import { toClassNames } from "../../utils"

import { NavigationMenu } from "@base-ui/react/navigation-menu"
import { ChevronDown } from "lucide-react"

/**
 * Groups all parts of the navigation menu.
 * Renders a `<nav>` element at the root, or `<div>` element when nested.
 */
export const NavigationMenuRoot = <Value = unknown>(props: NavigationMenuRootProps<Value>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Root
			{...restProps}
			className={toClassNames("navigation-menu", className)}
		>
			{children}
		</NavigationMenu.Root>
	)
}

/**
 * Contains a list of navigation menu items.
 * Renders a `<ul>` element.
 */
export const NavigationMenuList = (props: NavigationMenuListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.List
			{...restProps}
			className={toClassNames("navigation-menu__list", className)}
		>
			{children}
		</NavigationMenu.List>
	)
}

/**
 * An individual navigation menu item.
 * Renders a `<li>` element.
 */
export const NavigationMenuItem = (props: NavigationMenuItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Item
			{...restProps}
			className={toClassNames("navigation-menu__item", className)}
		>
			{children}
		</NavigationMenu.Item>
	)
}

/**
 * Opens the navigation menu popup when hovered or clicked, revealing the
 * associated content.
 * Renders a `<button>` element.
 */
export const NavigationMenuTrigger = (props: NavigationMenuTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Trigger
			{...restProps}
			className={toClassNames("navigation-menu__trigger", className)}
		>
			{children}
		</NavigationMenu.Trigger>
	)
}

/**
 * An icon that indicates that the trigger button opens a menu.
 * Renders a `<span>` element.
 */
export const NavigationMenuIcon = (props: NavigationMenuIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Icon
			{...restProps}
			className={toClassNames("navigation-menu__icon", className)}
		>
			{children ?? <ChevronDown/>}
		</NavigationMenu.Icon>
	)
}

/**
 * A container for the content of the navigation menu item that is moved into the popup
 * when the item is active.
 * Renders a `<div>` element.
 */
export const NavigationMenuContent = (props: NavigationMenuContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Content
			{...restProps}
			className={toClassNames("navigation-menu__content", className)}
		>
			{children ?? <ChevronDown/>}
		</NavigationMenu.Content>
	)
}

/**
 * A link in the navigation menu that can be used to navigate to a different page or section.
 * Renders an `<a>` element.
 */
export const NavigationMenuLink = (props: NavigationMenuLinkProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Link
			{...restProps}
			className={toClassNames("navigation-menu__link", className)}
		>
			{children}
		</NavigationMenu.Link>
	)
}

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
export const NavigationMenuPortal = (props: NavigationMenuPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Portal
			{...restProps}
			className={toClassNames("navigation-menu__portal", className)}
		>
			{children}
		</NavigationMenu.Portal>
	)
}

/**
 * A backdrop for the navigation menu popup.
 * Renders a `<div>` element.
 */
export const NavigationMenuBackdrop = (props: NavigationMenuBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Backdrop
			{...restProps}
			className={toClassNames("navigation-menu__backdrop", className)}
		>
			{children}
		</NavigationMenu.Backdrop>
	)
}

/**
 * Positions the navigation menu against the currently active trigger.
 * Renders a `<div>` element.
 */
export const NavigationMenuPositioner = (props: NavigationMenuPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("navigation-menu__positioner", className)}
		>
			{children}
		</NavigationMenu.Positioner>
	)
}

/**
 * A container for the navigation menu contents.
 * Renders a `<nav>` element.
 */
export const NavigationMenuPopup = (props: NavigationMenuPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Popup
			{...restProps}
			className={toClassNames("navigation-menu__popup", className)}
		>
			{children}
		</NavigationMenu.Popup>
	)
}

/**
 * Displays an element pointing toward the navigation menu's current anchor.
 * Renders a `<div>` element.
 */
export const NavigationMenuArrow = (props: NavigationMenuArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<NavigationMenu.Arrow
			{...restProps}
			className={toClassNames("navigation-menu__arrow", className)}
		/>
	)
}

/**
 * The clipping viewport of the navigation menu's current content.
 * Renders a `<div>` element.
 */
export const NavigationMenuViewport = (props: NavigationMenuViewportProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Viewport
			{...restProps}
			className={toClassNames("navigation-menu__viewport", className)}
		>
			{children}
		</NavigationMenu.Viewport>
	)
}
