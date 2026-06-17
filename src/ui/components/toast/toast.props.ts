import type {
	ToastRootToastObject,
	ToastViewportProps as BaseToastViewportProps,
	ToastRootProps as BaseToastRootProps,
	ToastActionProps as BaseToastActionProps,
	ToastCloseProps as BaseToastCloseProps,
} from "@base-ui/react/toast"

import type { BaseUIComponentProps } from "@base-ui/react/internals/types"
import type { ToastData, ToastOptions } from "./toast.types"

type ToastIndicatorState = object
type ToastGroupState = object

export type {
	ToastProviderProps,
	ToastPortalProps,
	ToastPositionerProps,
	ToastArrowProps,
	ToastContentProps,
	ToastTitleProps,
	ToastDescriptionProps,
} from "@base-ui/react/toast"

export type ToastViewportProps = BaseToastViewportProps & {
	/**
	 * The positioning of the component on the screen.
	 * @default "bottom-right"
	 */
	position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"
}

export type ToastRootProps<Data extends ToastData = ToastData> = Omit<BaseToastRootProps, "toast"> & {
	toast: ToastRootToastObject<Data> & ToastOptions
}

export type ToastIndicatorProps = BaseUIComponentProps<"span", ToastIndicatorState>
export type ToastGroupProps = BaseUIComponentProps<"div", ToastGroupState>

export type ToastActionProps = BaseToastActionProps & {
	/**
	 * Whether to render the native action button with its default styles.
	 * @default true
	 */
	nativeAction?: boolean
}

export type ToastCloseProps = BaseToastCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default true
	 */
	nativeClose?: boolean
}