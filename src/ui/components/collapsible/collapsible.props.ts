import type { UIComponentProps } from "../../types"

export type {
	CollapsibleRootProps,
	CollapsibleRootState,
	CollapsibleRootChangeEventReason,
	CollapsibleRootChangeEventDetails,
	CollapsibleTriggerProps,
	CollapsibleTriggerState,
	CollapsiblePanelProps,
	CollapsiblePanelState,
} from "@base-ui/react/collapsible"

export type CollapsibleIndicatorState = object
export type CollapsibleIndicatorProps = UIComponentProps<"span", CollapsibleIndicatorState>

export type CollapsibleContentState = object
export type CollapsibleContentProps = UIComponentProps<"div", CollapsibleContentState>