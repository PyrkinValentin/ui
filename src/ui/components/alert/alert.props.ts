import type { UIComponentProps } from "../../types"

export type AlertRootProps = UIComponentProps<"div"> & {
	/**
	 * The visual style of the component.
	 * @default "primary"
	 */
	variant?: "primary" | "secondary"
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "danger"
}

export type AlertIndicatorProps = UIComponentProps<"span">
export type AlertContentProps = UIComponentProps<"div">
export type AlertTitleProps = UIComponentProps<"div">
export type AlertDescriptionProps = UIComponentProps<"p">