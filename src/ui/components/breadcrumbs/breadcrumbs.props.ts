import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type BreadcrumbsRootState = object
type BreadcrumbsListState = object
type BreadcrumbsItemState = object
type BreadcrumbsSeparatorState = object
type BreadcrumbsLinkState = object
type BreadcrumbsPageState = object
type BreadcrumbsEllipsisState = object

export type BreadcrumbsRootProps = BaseUIComponentProps<"nav", BreadcrumbsRootState>
export type BreadcrumbsListProps = BaseUIComponentProps<"ol", BreadcrumbsListState>
export type BreadcrumbsItemProps = BaseUIComponentProps<"li", BreadcrumbsItemState>
export type BreadcrumbsSeparatorProps = BaseUIComponentProps<"li", BreadcrumbsSeparatorState>
export type BreadcrumbsLinkProps = BaseUIComponentProps<"a", BreadcrumbsLinkState>
export type BreadcrumbsPageProps = BaseUIComponentProps<"span", BreadcrumbsPageState>
export type BreadcrumbsEllipsisProps = BaseUIComponentProps<"span", BreadcrumbsEllipsisState>
