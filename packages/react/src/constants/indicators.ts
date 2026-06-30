import type { ComponentType } from "react"
import type { IconProps } from "../icons"

import { CircleAlert, CircleCheck, Info, TriangleAlert } from "../icons"

type Status = "neutral" | "info" | "success" | "warning" | "error"
type StatusIndicators = Record<Status, ComponentType<IconProps>>

export const STATUS_INDICATORS: StatusIndicators = {
	neutral: Info,
	info: Info,
	success: CircleCheck,
	warning: TriangleAlert,
	error: CircleAlert,
}