import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type AccordionIndicatorState = object
type AccordionContentState = object

export type {
	AccordionRootProps,
	AccordionItemProps,
	AccordionHeaderProps,
	AccordionTriggerProps,
	AccordionPanelProps,
} from "@base-ui/react/accordion"

export type AccordionIndicatorProps = BaseUIComponentProps<"span", AccordionIndicatorState>
export type AccordionContentProps = BaseUIComponentProps<"div", AccordionContentState>