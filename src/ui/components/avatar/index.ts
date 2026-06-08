import { getAvatarInitials } from "./avatar.utils"

import { AvatarRoot, AvatarImage, AvatarFallback } from "./avatar"

export const Avatar = {
	Root: AvatarRoot,
	Image: AvatarImage,
	Fallback: AvatarFallback,
	getInitials: getAvatarInitials,
} as const