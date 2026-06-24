"use client"

import type {
	TableRootProps,
	TableCaptionProps,
	TableHeaderProps,
	TableBodyProps,
	TableRowProps,
	TableHeadProps,
	TableCellProps,
	TableFooterProps,
} from "./table.props"

import { toClassNames } from "../../utils"

import { Render } from "../../primitives"

/**
 * The root container used to organize and display tabular data.
 * Renders a `<table>` element.
 */
export const TableRoot = (props: TableRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="table"
			className={toClassNames("table", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A description or title displayed at the top or bottom of the table.
 * Renders a `<caption>` element.
 */
export const TableCaption = (props: TableCaptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="caption"
			className={toClassNames("table__caption", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A container wrapper for the group of table header rows.
 * Renders a `<thead>` element.
 */
export const TableHeader = (props: TableHeaderProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="thead"
			className={toClassNames("table__header", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A container wrapper for the main content rows of the table.
 * Renders a `<tbody>` element.
 */
export const TableBody = (props: TableBodyProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="tbody"
			className={toClassNames("table__body", className)}
		>
			{children}
		</Render>
	)
}

/**
 * An individual horizontal row container within the table.
 * Renders a `<tr>` element.
 */
export const TableRow = (props: TableRowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="tr"
			className={toClassNames("table__row", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A header cell representing metadata or a title for a column or row.
 * Renders a `<th>` element.
 */
export const TableHead = (props: TableHeadProps) => {
	const {
		scope = "col",
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="th"
			scope={scope}
			className={toClassNames("table__head", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A standard data cell holding individual values within a table row.
 * Renders a `<td>` element.
 */
export const TableCell = (props: TableCellProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="td"
			className={toClassNames("table__cell", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A container wrapper for the group of table summary or footer rows.
 * Renders a `<tfoot>` element.
 */
export const TableFooter = (props: TableFooterProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="tfoot"
			className={toClassNames("table__footer", className)}
		>
			{children}
		</Render>
	)
}