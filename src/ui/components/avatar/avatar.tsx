"use client"

import type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps } from "./avatar.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Avatar } from "@base-ui/react/avatar"

import { UserRound } from "lucide-react"

export const AvatarRoot = (props: AvatarRootProps) => {
	const {
		size = "md",
		color = "neutral",
		className,
		children,
		...restProps
	} = props

	return (
		<Avatar.Root
			{...restProps}
			{...toDataAttrs({ size, color })}
			className={toClassNames("avatar", className)}
		>
			{children}
		</Avatar.Root>
	)
}

export const AvatarImage = (props: AvatarImageProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Avatar.Image
			{...restProps}
			className={toClassNames("avatar__image", className)}
		/>
	)
}

export const AvatarFallback = (props: AvatarFallbackProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Avatar.Fallback
			{...restProps}
			className={toClassNames("avatar__fallback", className)}
		>
			{children ?? <UserRound/>}
		</Avatar.Fallback>
	)
}

AvatarRoot.displayName = "Avatar.Root"
AvatarImage.displayName = "Avatar.Image"
AvatarFallback.displayName = "Avatar.Fallback"