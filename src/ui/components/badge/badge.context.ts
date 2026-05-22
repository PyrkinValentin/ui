import type { BadgeContextValue } from "./badge.types"

import { createContext, use } from "react"

export const BadgeContext = createContext<BadgeContextValue>({
	side: "top",
	align: "end",
	size: "md",
	status: "neutral",
})

export const useBadgeContext = () => use(BadgeContext)