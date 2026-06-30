"use client"

import type { TabsRootProps, TabsListProps, TabsTabProps, TabsIndicatorProps, TabsPanelProps } from "./tabs.props"

import { toClassNames } from "../../utils"

import { Tabs } from "@base-ui/react/tabs"

/**
 * Groups the tabs and the corresponding panels.
 * Renders a `<div>` element.
 */
export const TabsRoot = (props: TabsRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tabs.Root
			{...restProps}
			className={toClassNames("tabs", className)}
		>
			{children}
		</Tabs.Root>
	)
}

/**
 * Groups the individual tab buttons.
 * Renders a `<div>` element.
 */
export const TabsList = (props: TabsListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tabs.List
			{...restProps}
			className={toClassNames("tabs__list", className)}
		>
			{children}
		</Tabs.List>
	)
}

/**
 * An individual interactive tab button that toggles the corresponding panel.
 * Renders a `<button>` element.
 */
export const TabsTab = (props: TabsTabProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tabs.Tab
			{...restProps}
			className={toClassNames("tabs__tab", className)}
		>
			{children}
		</Tabs.Tab>
	)
}

/**
 * A visual indicator that can be styled to match the position of the currently active tab.
 * Renders a `<span>` element.
 */
export const TabsIndicator = (props: TabsIndicatorProps) => {
	const {
		renderBeforeHydration = true,
		className,
		children,
		...restProps
	} = props

	return (
		<Tabs.Indicator
			{...restProps}
			renderBeforeHydration={renderBeforeHydration}
			className={toClassNames("tabs__indicator", className)}
		>
			{children}
		</Tabs.Indicator>
	)
}

/**
 * A panel displayed when the corresponding tab is active.
 * Renders a `<div>` element.
 */
export const TabsPanel = (props: TabsPanelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tabs.Panel
			{...restProps}
			className={toClassNames("tabs__panel", className)}
		>
			{children}
		</Tabs.Panel>
	)
}