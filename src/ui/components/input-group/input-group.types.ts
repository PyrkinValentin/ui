import type { ReactNode, RefObject } from "react"
import type { InputGroupProps } from "./input-group.props"

type InputGroupVariant = NonNullable<InputGroupProps["variant"]>
type InputGroupSize = NonNullable<InputGroupProps["size"]>

export type InputGroupContextValue = {
	variant: InputGroupVariant
	size: InputGroupSize
	inputRef?: RefObject<HTMLInputElement | null>
}

export type InputGroupProviderProps = InputGroupContextValue & {
	children: ReactNode
}