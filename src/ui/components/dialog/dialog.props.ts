import type {
	DialogPopupProps as BaseDialogPopupProps,
	DialogCloseProps as BaseDialogCloseProps,
} from "@base-ui/react/dialog"

import type { UIComponentProps } from "../../types"

export type {
	DialogRootProps,
	DialogRootState,
	DialogRootActions,
	DialogRootChangeEventReason,
	DialogRootChangeEventDetails,
	DialogTriggerProps,
	DialogTriggerState,
	DialogPortalProps,
	DialogPortalState,
	DialogBackdropProps,
	DialogBackdropState,
	DialogViewportProps,
	DialogViewportState,
	DialogPopupState,
	DialogTitleProps,
	DialogTitleState,
	DialogDescriptionProps,
	DialogDescriptionState,
	DialogCloseState,
} from "@base-ui/react/dialog"

export type DialogPopupProps = BaseDialogPopupProps & {
	/**
	 * The size of the component.
	 * @default "sm"
	 */
	size?: "xs" | "sm" | "md" | "lg" | "full"
}

export type DialogActionsState = object
export type DialogActionsProps = UIComponentProps<"div", DialogActionsState>

export type DialogCloseProps = BaseDialogCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default false
	 */
	nativeClose?: boolean
}