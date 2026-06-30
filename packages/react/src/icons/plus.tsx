import type { IconProps } from "./icon.props"

import { Icon } from "./icon"

export const Plus = (props: IconProps) => (
	<Icon {...props}>
		<path d="M5 12h14"/>
		<path d="M12 5v14"/>
	</Icon>
)