import { REASONS as BASE_REASONS } from "@base-ui/react/internals/reasons"

export const REASONS = {
	...BASE_REASONS,
	prevPress: "prev-press",
	nextPress: "next-press",
	pagePress: "page-press",
	sync: "sync",
} as const