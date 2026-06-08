import { FieldRoot, FieldLabel, FieldControl, FieldDescription, FieldItem, FieldError, FieldValidity } from "./field"

export const Field = {
	Root: FieldRoot,
	Label: FieldLabel,
	Control: FieldControl,
	Description: FieldDescription,
	Item: FieldItem,
	Error: FieldError,
	Validity: FieldValidity,
} as const