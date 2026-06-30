"use client"

import type { ToastData, UseToastManagerReturn } from "./toast.types"

import { use } from "react"

import { Toast } from "@base-ui/react/toast"
import { ToastRootContext } from "./toast.context"

export const useToastRootContext = () => use(ToastRootContext)

/**
 * Returns the array of toasts and methods to manage them.
 */
export const useToastManager = <Data extends ToastData = ToastData>(): UseToastManagerReturn<Data> => {
	return Toast.useToastManager<Data>()
}