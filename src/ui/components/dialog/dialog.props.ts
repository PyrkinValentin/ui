import type {
	DialogViewportProps as BaseDialogViewportProps,
	DialogCloseProps as BaseDialogCloseProps,
} from "@base-ui/react/dialog"

import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type DialogActionsState = object

export type {
	DialogRootProps,
	DialogTriggerProps,
	DialogPortalProps,
	DialogBackdropProps,
	DialogPopupProps,
	DialogTitleProps,
	DialogDescriptionProps,
} from "@base-ui/react/dialog"

export type DialogViewportProps = BaseDialogViewportProps & {
	/**
	 * The positioning of the component on the screen.
	 * @default "center"
	 */
	position?: "top" | "center" | "bottom"
}

export type DialogActionsProps = BaseUIComponentProps<"div", DialogActionsState>

export type DialogCloseProps = BaseDialogCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default false
	 */
	nativeClose?: boolean
}