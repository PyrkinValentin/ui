import type { AlertContextValue } from "./alert.types"

import { createContext, use } from "react"

export const AlertContext = createContext<AlertContextValue>({
	variant: "primary",
	status: "neutral",
})

export const useAlertContext = () => use(AlertContext)