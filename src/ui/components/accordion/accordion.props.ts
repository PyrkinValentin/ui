import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type AccordionIconState = object
type AccordionContentState = object

export type {
	AccordionRootProps,
	AccordionItemProps,
	AccordionHeaderProps,
	AccordionTriggerProps,
	AccordionPanelProps,
} from "@base-ui/react/accordion"

export type AccordionIconProps = BaseUIComponentProps<"span", AccordionIconState>
export type AccordionContentProps = BaseUIComponentProps<"div", AccordionContentState>