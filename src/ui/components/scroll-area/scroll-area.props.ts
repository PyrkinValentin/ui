import type { ScrollAreaViewportProps as BaseScrollAreaViewportProps } from "@base-ui/react/scroll-area"

export type {
	ScrollAreaRootProps,
	ScrollAreaContentProps,
	ScrollAreaScrollbarProps,
	ScrollAreaThumbProps,
	ScrollAreaCornerProps,
} from "@base-ui/react/scroll-area"

export type ScrollAreaViewportProps = BaseScrollAreaViewportProps & {
	/**
	 * Enables a gradient fade effect at the scrollable edges.
	 * @default false
	 */
	scrollFade?: boolean
}