import type { PaginationRootChangeEventDetails, PaginationRootProps } from "./pagination.props"

export type PaginationEllipsisType = "ellipsis-start" | "ellipsis-end"
export type PaginationEllipsis = Record<"ellipsisStart" | "ellipsisEnd", PaginationEllipsisType>

export type PaginationRootContextValue = Pick<PaginationRootProps, "size"> & {
	total: number
	page: number
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
}

export type UsePaginationSyncOptions = {
	page: number
	total: number
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
}

export type UsePaginationManagerOptions = {
	/** The total number of pages available. */
	total: number
	/** The current active page number. */
	page: number
	/** The number of active pages shown on each side of the current page. */
	siblings?: number
	/** The number of active pages shown at the start and end boundaries. */
	boundaries?: number
	/** Callback invoked when the active page changes. */
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
}

export type UsePaginationManagerReturn = {
	page: number
	pages: (number | PaginationEllipsisType)[]
	total: number
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
}