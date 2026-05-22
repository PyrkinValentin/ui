import {
	TooltipProvider,
	TooltipRoot,
	TooltipTrigger,
	TooltipPortal,
	TooltipPositioner,
	TooltipPopup,
	TooltipArrow,
	tooltipCreateHandle,
} from "./tooltip"

export const Tooltip = {
	Provider: TooltipProvider,
	Root: TooltipRoot,
	Trigger: TooltipTrigger,
	Portal: TooltipPortal,
	Positioner: TooltipPositioner,
	Popup: TooltipPopup,
	Arrow: TooltipArrow,
	createHandle: tooltipCreateHandle,
}