"use client"

import type { MouseEvent } from "react"
import type { InputGroupProps, InputGroupInputProps } from "./input-group.props"
import type { InputGroupContextValue, InputGroupProviderProps } from "./input-group.types"

import { useMemo, useRef } from "react"
import { useMergeRefs } from "../../hooks"
import { useInputGroupContext } from "./input-group.context"

import { applyCn, toDataAttrs } from "../../utils"
import { focusInputSlot } from "./input-group.utils"

import { Input } from "@base-ui/react/input"
import { Render } from "../render"
import { InputGroupContext } from "./input-group.context"

const InputGroupProvider = (props: InputGroupProviderProps) => {
	const {
		variant,
		size,
		inputRef,
		children,
	} = props

	const contextValue = useMemo<InputGroupContextValue>(() => ({
		variant,
		size,
		inputRef,
	}), [variant, size, inputRef])

	return (
		<InputGroupContext value={contextValue}>
			{children}
		</InputGroupContext>
	)
}

export const InputGroupRoot = (props: InputGroupProps) => {
	const {
		variant = "primary",
		size = "md",
		className,
		onMouseDown,
		children,
		...restProps
	} = props

	const inputRef = useRef<HTMLInputElement>(null)

	const handleMouseDown = (ev: MouseEvent<HTMLDivElement>) => {
		onMouseDown?.(ev)

		const input = inputRef.current

		if (input && !ev.defaultPrevented) {
			focusInputSlot(ev, input)
		}
	}

	return (
		<InputGroupProvider
			variant={variant}
			size={size}
			inputRef={inputRef}
		>
			<Render
				{...restProps}
				{...toDataAttrs({ variant, size })}
				defaultTagName="div"
				role="group"
				data-slot="input-group"
				className={applyCn("input-group", className)}
				onMouseDown={handleMouseDown}
			>
				{children}
			</Render>
		</InputGroupProvider>
	)
}

export const InputGroupInput = (props: InputGroupInputProps) => {
	const {
		ref,
		className,
		...restProps
	} = props

	const { variant, size, inputRef } = useInputGroupContext()

	const mergeRefs = useMergeRefs(inputRef, ref)

	return (
		<Input
			{...restProps}
			{...toDataAttrs({ variant, size })}
			ref={mergeRefs}
			data-slot="input-group-input"
			className={applyCn("input-group__input", className)}
		/>
	)
}

InputGroupRoot.displayName = "InputGroup"
InputGroupInput.displayName = "InputGroup.Input"