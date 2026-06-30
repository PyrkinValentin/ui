import type { IconProps } from "./icon.props"

import { Icon } from "./icon"

export const X = (props: IconProps) => (
	<Icon {...props}>
		<path d="M18 6 6 18"/>
		<path d="m6 6 12 12"/>
	</Icon>
)