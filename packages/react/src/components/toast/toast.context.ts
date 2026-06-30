"use client"

import type { ToastRootContextValue } from "./toast.types"

import { createContext } from "react"

export const ToastRootContext = createContext<ToastRootContextValue>({
	status: "neutral",
})