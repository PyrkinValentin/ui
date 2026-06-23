import { createPreviewCardHandle } from "./preview-card.utils"

import {
	PreviewCardRoot,
	PreviewCardTrigger,
	PreviewCardPortal,
	PreviewCardBackdrop,
	PreviewCardPositioner,
	PreviewCardPopup,
	PreviewCardArrow,
	PreviewCardViewport,
} from "./preview-card"

export const PreviewCard = {
	Root: PreviewCardRoot,
	Trigger: PreviewCardTrigger,
	Portal: PreviewCardPortal,
	Backdrop: PreviewCardBackdrop,
	Positioner: PreviewCardPositioner,
	Popup: PreviewCardPopup,
	Arrow: PreviewCardArrow,
	Viewport: PreviewCardViewport,
	createHandle: createPreviewCardHandle,
} as const