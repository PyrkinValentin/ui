import type { DrawerViewportProps } from "./drawer.props"

type DrawerPosition = NonNullable<DrawerViewportProps["position"]>

export type DrawerViewportContextValue = {
	position: DrawerPosition
}