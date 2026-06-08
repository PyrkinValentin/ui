import type { UIComponentProps } from "../../types"

export type BreadcrumbsRootState = object
export type BreadcrumbsRootProps = UIComponentProps<"nav", BreadcrumbsRootState>

export type BreadcrumbsListState = object
export type BreadcrumbsListProps = UIComponentProps<"ol", BreadcrumbsListState>

export type BreadcrumbsItemState = object
export type BreadcrumbsItemProps = UIComponentProps<"li", BreadcrumbsItemState>

export type BreadcrumbsSeparatorState = object
export type BreadcrumbsSeparatorProps = UIComponentProps<"li", BreadcrumbsSeparatorState>

export type BreadcrumbsLinkState = object
export type BreadcrumbsLinkProps = UIComponentProps<"a", BreadcrumbsLinkState>

export type BreadcrumbsPageState = object
export type BreadcrumbsPageProps = UIComponentProps<"span", BreadcrumbsPageState>

export type BreadcrumbsEllipsisState = object
export type BreadcrumbsEllipsisProps = UIComponentProps<"span", BreadcrumbsEllipsisState>
