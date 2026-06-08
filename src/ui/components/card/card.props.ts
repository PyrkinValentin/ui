import type { UIComponentProps } from "../../types"

export type CardRootState = object
export type CardRootProps = UIComponentProps<"div", CardRootState>

export type CardContentState = object
export type CardContentProps = UIComponentProps<"div", CardContentState>

export type CardTitleState = object
export type CardTitleProps = UIComponentProps<"h2", CardTitleState>

export type CardDescriptionState = object
export type CardDescriptionProps = UIComponentProps<"p", CardDescriptionState>