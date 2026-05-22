import type { MouseEvent } from "react"

export const focusInputSlot = (ev: MouseEvent<HTMLElement>, input: HTMLInputElement) => {
	const target = ev.target as HTMLElement

	if (target.closest("button, [role='button'], a, input, select, textarea")) return

	if (
		input &&
		target !== input &&
		!input.contains(target)
	) {
		ev.preventDefault()

		const length = input.value.length

		input.focus({ preventScroll: true })
		input.setSelectionRange(length, length)
	}
}