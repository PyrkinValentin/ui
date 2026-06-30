import type { IconProps } from "./icon.props"

import { Icon } from "./icon"

export const Ellipsis = (props: IconProps) => (
	<Icon {...props}>
		<circle cx="12" cy="12" r="1"/>
		<circle cx="19" cy="12" r="1"/>
		<circle cx="5" cy="12" r="1"/>
	</Icon>
)