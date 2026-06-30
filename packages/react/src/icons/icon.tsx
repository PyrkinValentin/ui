import type { IconProps } from "./icon.props"

export const Icon = (props: IconProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...restProps}
		>
			{children}
		</svg>
	)
}