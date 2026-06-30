import type { IconProps } from "./icon.props"

import { Icon } from "./icon"

export const CircleCheck = (props: IconProps) => (
	<Icon {...props}>
		<circle cx="12" cy="12" r="10"/>
		<path d="m9 12 2 2 4-4"/>
	</Icon>
)