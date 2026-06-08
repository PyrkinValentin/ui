import { UIComponentProps } from "../../types"

export type ItemRootState = object
export type ItemRootProps = UIComponentProps<"div", ItemRootState>

export type ItemMediaState = object
export type ItemMediaProps = UIComponentProps<"span", ItemMediaState>

export type ItemContentState = object
export type ItemContentProps = UIComponentProps<"div", ItemContentState>

export type ItemTitleState = object
export type ItemTitleProps = UIComponentProps<"h2", ItemTitleState>

export type ItemDescriptionState = object
export type ItemDescriptionProps = UIComponentProps<"p", ItemDescriptionState>

export type ItemActionsState = object
export type ItemActionsProps = UIComponentProps<"div", ItemActionsState>