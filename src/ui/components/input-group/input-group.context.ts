import type { InputGroupContextValue } from "./input-group.types"

import { createContext, use } from "react"

export const InputGroupContext = createContext<InputGroupContextValue>({
	variant: "primary",
	size: "md",
})

export const useInputGroupContext = () => use(InputGroupContext)