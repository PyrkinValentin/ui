import type { MouseEvent } from "react"
import type { BaseUIEvent } from "@base-ui/react"

import { SELECTABLE_INPUTS } from "../../constants"

export const focusInputSlot = (ev: BaseUIEvent<MouseEvent<HTMLDivElement>>) => {
	const target = ev.target as HTMLElement

	if (target.closest("button, a, select, textarea, [role='button'], [tabindex]")) return

	const input = ev
		.currentTarget
		.querySelector<HTMLInputElement>("input:not([type='hidden'])")

	if (
		input &&
		target !== input &&
		!input.disabled
	) {
		ev.preventDefault()
		input.focus({ preventScroll: true })

		const selectable = SELECTABLE_INPUTS.includes(input.type)
		const length = input.value.length

		if (selectable && length > 0) {
			input.setSelectionRange(length, length)
		}
	}
}