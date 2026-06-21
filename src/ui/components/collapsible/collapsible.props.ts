import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type CollapsibleIconState = object
type CollapsibleContentState = object

export type { CollapsibleRootProps, CollapsibleTriggerProps, CollapsiblePanelProps } from "@base-ui/react/collapsible"

export type CollapsibleIconProps = BaseUIComponentProps<"span", CollapsibleIconState>
export type CollapsibleContentProps = BaseUIComponentProps<"div", CollapsibleContentState>