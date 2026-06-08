import type { UIComponentProps } from "../../types"

export type {
	AccordionRootProps,
	AccordionRootState,
	AccordionRootChangeEventReason,
	AccordionRootChangeEventDetails,
	AccordionItemProps,
	AccordionItemState,
	AccordionItemChangeEventReason,
	AccordionItemChangeEventDetails,
	AccordionHeaderProps,
	AccordionHeaderState,
	AccordionTriggerProps,
	AccordionTriggerState,
	AccordionPanelProps,
	AccordionPanelState,
	AccordionValue,
} from "@base-ui/react/accordion"

export type AccordionIndicatorState = object
export type AccordionIndicatorProps = UIComponentProps<"span", AccordionIndicatorState>

export type AccordionContentState = object
export type AccordionContentProps = UIComponentProps<"div", AccordionContentState>