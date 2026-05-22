import type { ComponentType, ReactNode } from "react"
import type { LucideProps } from "lucide-react"
import type { AlertRootProps } from "./alert.props"

type AlertVariant = NonNullable<AlertRootProps["variant"]>
export type AlertStatus = NonNullable<AlertRootProps["status"]>

export type AlertContextValue = {
	variant: AlertVariant
	status: AlertStatus
}

export type AlertProviderProps = AlertContextValue & {
	children: ReactNode
}

export type AlertIndicators = Record<AlertStatus, ComponentType<LucideProps>>