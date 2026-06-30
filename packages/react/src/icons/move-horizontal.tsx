import type { IconProps } from "./icon.props"

import { Icon } from "./icon"

export const MoveHorizontal = (props: IconProps) => (
	<Icon {...props}>
		<path d="m18 8 4 4-4 4"/>
		<path d="M2 12h20"/>
		<path d="m6 8-4 4 4 4"/>
	</Icon>
)