import type { ComponentProps, CSSProperties, JSX, ReactElement } from "react"
import type { HTMLProps } from "@base-ui/react"

export type UIComponentProps<Element extends keyof JSX.IntrinsicElements, State = Record<string, unknown>, RenderFunctionProps = HTMLProps> =
	Omit<ComponentProps<Element>, "className" | "style" | "color">
	& {
	/**
	 * CSS class applied to the element, or a function that
	 * returns a class based on the component's state.
	 */
	className?: string | ((state: State) => string | undefined) | undefined
	/**
	 * Allows you to replace the component's HTML element
	 * with a different tag, or compose it with another component.
	 *
	 * Accepts a `ReactElement` or a function that returns the element to render.
	 */
	render?: ReactElement | ((props: RenderFunctionProps, state: State) => ReactElement)
	/**
	 * Style applied to the element, or a function that
	 * returns a style object based on the component's state.
	 */
	style?: CSSProperties | ((state: State) => CSSProperties | undefined) | undefined
}