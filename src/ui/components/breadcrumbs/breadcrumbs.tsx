"use client"

import type {
	BreadcrumbsRootProps,
	BreadcrumbsListProps,
	BreadcrumbsItemProps,
	BreadcrumbsSeparatorProps,
	BreadcrumbsLinkProps,
	BreadcrumbsPageProps,
	BreadcrumbsEllipsisProps,
} from "./breadcrumbs.props"

import { toClassNames } from "../../utils"

import { ChevronRight, Ellipsis } from "lucide-react"
import { Render } from "../../primitives"

/**
 * The root container that establishes the navigation landmark for breadcrumbs.
 * Renders a `<nav>` element.
 */
export const BreadcrumbsRoot = (props: BreadcrumbsRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="nav"
			className={toClassNames("breadcrumbs", className)}
		>
			{children}
		</Render>
	)
}

/**
 * An ordered list container holding the breadcrumb items.
 * Renders an `<ol>` element.
 */
export const BreadcrumbsList = (props: BreadcrumbsListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="ol"
			className={toClassNames("breadcrumbs__list", className)}
		>
			{children}
		</Render>
	)
}

/**
 * An individual item container within the breadcrumb list.
 * Renders a `<li>` element.
 */
export const BreadcrumbsItem = (props: BreadcrumbsItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="li"
			className={toClassNames("breadcrumbs__item", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A visual divider displayed between breadcrumb items.
 * Renders a `<li>` element.
 */
export const BreadcrumbsSeparator = (props: BreadcrumbsSeparatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="li"
			role="presentation"
			aria-hidden="true"
			className={toClassNames("breadcrumbs__separator", className)}
		>
			{children ?? <ChevronRight/>}
		</Render>
	)
}

/**
 * A clickable link pointing to a previous level in the navigation hierarchy.
 * Renders an `<a>` element.
 */
export const BreadcrumbsLink = (props: BreadcrumbsLinkProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="a"
			className={toClassNames("breadcrumbs__link", className)}
		>
			{children}
		</Render>
	)
}

/**
 * The text element representing the current active page in the path.
 * Renders a `<span>` element.
 */
export const BreadcrumbsPage = (props: BreadcrumbsPageProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			role="link"
			aria-disabled="true"
			aria-current="page"
			className={toClassNames("breadcrumbs__page", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A visual indicator showing that some middle breadcrumb steps are hidden.
 * Renders a `<span>` element.
 */
export const BreadcrumbsEllipsis = (props: BreadcrumbsEllipsisProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			role="presentation"
			aria-hidden="true"
			className={toClassNames("breadcrumbs__ellipsis", className)}
		>
			{children ?? <Ellipsis/>}
		</Render>
	)
}