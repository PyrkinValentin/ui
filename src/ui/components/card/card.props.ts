import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type CardRootState = object
type CardContentState = object
type CardTitleState = object
type CardDescriptionState = object

export type CardRootProps = BaseUIComponentProps<"div", CardRootState>
export type CardContentProps = BaseUIComponentProps<"div", CardContentState>
export type CardTitleProps = BaseUIComponentProps<"h2", CardTitleState>
export type CardDescriptionProps = BaseUIComponentProps<"p", CardDescriptionState>