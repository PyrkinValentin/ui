"use client"

import type { TabsRootProps, TabsListProps, TabsTabProps, TabsIndicatorProps, TabsPanelProps } from "./tabs.props"

import { toClassNames } from "../../utils"

import { Tabs } from "@base-ui/react/tabs"

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