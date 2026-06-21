import type { MouseEvent } from "react"
import type { BaseUIEvent } from "@base-ui/react"

export const focusTextareaSlot = (ev: BaseUIEvent<MouseEvent<HTMLDivElement>>) => {
	const target = ev.target as HTMLElement

	if (target.closest("button, a, select, input, [role='button'], [tabindex]")) return

	const textarea = ev
		.currentTarget
		.querySelector<HTMLTextAreaElement>("textarea")

	if (
		textarea &&
		target !== textarea &&
		!textarea.disabled
	) {
		ev.preventDefault()
		textarea.focus({ preventScroll: true })

		const length = textarea.value.length

		if (length > 0) {
			textarea.setSelectionRange(length, length)
		}
	}
}