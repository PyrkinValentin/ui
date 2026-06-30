"use client"

import type {
	PreviewCardRootProps,
	PreviewCardTriggerProps,
	PreviewCardPortalProps,
	PreviewCardBackdropProps,
	PreviewCardPositionerProps,
	PreviewCardPopupProps,
	PreviewCardArrowProps,
	PreviewCardViewportProps,
} from "./preview-card.props"

import { toClassNames } from "../../utils"

import { PreviewCard } from "@base-ui/react/preview-card"

export const PreviewCardRoot = <Payload = unknown>(props: PreviewCardRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<PreviewCard.Root {...restProps}>
			{children}
		</PreviewCard.Root>
	)
}

export const PreviewCardTrigger = <Payload = unknown>(props: PreviewCardTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<PreviewCard.Trigger
			{...restProps}
			className={toClassNames("preview-card__trigger", className)}
		>
			{children}
		</PreviewCard.Trigger>
	)
}

export const PreviewCardPortal = (props: PreviewCardPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<PreviewCard.Portal
			{...restProps}
			className={toClassNames("preview-card__portal", className)}
		>
			{children}
		</PreviewCard.Portal>
	)
}

export const PreviewCardBackdrop = (props: PreviewCardBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<PreviewCard.Backdrop
			{...restProps}
			className={toClassNames("preview-card__backdrop", className)}
		>
			{children}
		</PreviewCard.Backdrop>
	)
}

export const PreviewCardPositioner = (props: PreviewCardPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<PreviewCard.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("preview-card__positioner", className)}
		>
			{children}
		</PreviewCard.Positioner>
	)
}

export const PreviewCardPopup = (props: PreviewCardPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<PreviewCard.Popup
			{...restProps}
			className={toClassNames("preview-card__popup", className)}
		>
			{children}
		</PreviewCard.Popup>
	)
}

export const PreviewCardArrow = (props: PreviewCardArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<PreviewCard.Arrow
			{...restProps}
			className={toClassNames("preview-card__arrow", className)}
		/>
	)
}

export const PreviewCardViewport = (props: PreviewCardViewportProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<PreviewCard.Viewport
			{...restProps}
			className={toClassNames("preview-card__viewport", className)}
		>
			{children}
		</PreviewCard.Viewport>
	)
}