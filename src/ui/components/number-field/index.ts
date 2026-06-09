import {
	NumberFieldRoot,
	NumberFieldScrubArea,
	NumberFieldScrubAreaCursor,
	NumberFieldGroup,
	NumberFieldDecrement,
	NumberFieldInput,
	NumberFieldIncrement,
} from "./number-field"

export const NumberField = {
	Root: NumberFieldRoot,
	ScrubArea: NumberFieldScrubArea,
	ScrubAreaCursor: NumberFieldScrubAreaCursor,
	Group: NumberFieldGroup,
	Decrement: NumberFieldDecrement,
	Input: NumberFieldInput,
	Increment: NumberFieldIncrement,
} as const