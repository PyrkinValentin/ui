import type { ClassValue } from "./cn"

import { cn } from "./cn"

type ApplyCnReturn<State> = string | ((state: State) => string | undefined)

export const applyCn = <State>(
	classNames?: ClassValue,
	className?: string | ((state: State) => string | undefined),
): ApplyCnReturn<State> => {
	if (!className) return cn(classNames)

	if (typeof className === "function") {
		return ((state: State) => cn(classNames, className(state)))
	}

	return cn(classNames, className)
}