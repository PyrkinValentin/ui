import { createTooltipHandle } from "./tooltip.utils"

import {
	TooltipProvider,
	TooltipRoot,
	TooltipTrigger,
	TooltipPortal,
	TooltipPositioner,
	TooltipPopup,
	TooltipArrow,
	TooltipViewport,
} from "./tooltip"

export const Tooltip = {
	Provider: TooltipProvider,
	Root: TooltipRoot,
	Trigger: TooltipTrigger,
	Portal: TooltipPortal,
	Positioner: TooltipPositioner,
	Popup: TooltipPopup,
	Arrow: TooltipArrow,
	Viewport: TooltipViewport,
	createHandle: createTooltipHandle,
} as const