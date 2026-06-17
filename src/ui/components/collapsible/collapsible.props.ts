import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type CollapsibleIndicatorState = object
type CollapsibleContentState = object

export type { CollapsibleRootProps, CollapsibleTriggerProps, CollapsiblePanelProps } from "@base-ui/react/collapsible"

export type CollapsibleIndicatorProps = BaseUIComponentProps<"span", CollapsibleIndicatorState>
export type CollapsibleContentProps = BaseUIComponentProps<"div", CollapsibleContentState>