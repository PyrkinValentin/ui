"use client"

import { Bold, ChevronRight, Italic, Minus, Plus, Search, Underline } from "lucide-react"

import {
	Accordion,
	Alert,
	Avatar,
	AvatarGroup,
	Badge,
	Breadcrumbs,
	Button,
	ButtonGroup,
	Card,
	Checkbox,
	Chip,
	Collapsible,
	Field,
	Fieldset,
	Input,
	InputGroup,
	Item,
	Meter,
	NumberField,
	Progress,
	Radio,
	RadioGroup,
	Separator,
	Skeleton,
	Slider,
	Spinner,
	Switch,
	Tabs,
	Textarea,
	Toggle,
	Tooltip,
} from "@/ui/components"

export type Category =
	| "Actions"
	| "Inputs"
	| "Data display"
	| "Feedback"
	| "Overlays"
	| "Navigation"

export interface PropDoc {
	name: string
	values: string
	default?: string
}

export interface ComponentDoc {
	id: string
	name: string
	category: Category
	blurb: string
	/** number of compound sub-parts (Root, Item, …) */
	parts: number
	props?: PropDoc[]
	importName: string
	preview?: React.ReactNode
}

const wrapTip = (node: React.ReactNode) => (
	<Tooltip.Provider>{node}</Tooltip.Provider>
)

export const COMPONENTS: ComponentDoc[] = [
	/* ---------------------------------------------------------------- Actions */
	{
		id: "button",
		name: "Button",
		category: "Actions",
		blurb: "Trigger actions with five variants and three sizes. Icon-only mode included.",
		parts: 1,
		importName: "Button",
		props: [
			{ name: "variant", values: "primary | secondary | outline | ghost | error", default: "primary" },
			{ name: "size", values: "sm | md | lg", default: "md" },
			{ name: "iconOnly", values: "boolean", default: "false" },
		],
		preview: (
			<div className="flex flex-wrap gap-2">
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="error">Error</Button>
			</div>
		),
	},
	{
		id: "button-group",
		name: "ButtonGroup",
		category: "Actions",
		blurb: "Visually join related buttons into a single segmented control.",
		parts: 1,
		importName: "ButtonGroup",
		props: [{ name: "orientation", values: "horizontal | vertical", default: "horizontal" }],
		preview: (
			<ButtonGroup>
				<Button variant="outline">Day</Button>
				<Button variant="outline">Week</Button>
				<Button variant="outline">Month</Button>
			</ButtonGroup>
		),
	},
	{
		id: "toggle",
		name: "Toggle",
		category: "Actions",
		blurb: "A two-state button that can be pressed on or off.",
		parts: 1,
		importName: "Toggle",
		props: [
			{ name: "variant", values: "secondary | ghost", default: "secondary" },
			{ name: "size", values: "sm | md | lg", default: "md" },
			{ name: "color", values: "info | success | warning | error" },
		],
		preview: (
			<div className="flex gap-2">
				<Toggle aria-label="Bold"><Bold className="size-4" /></Toggle>
				<Toggle aria-label="Italic"><Italic className="size-4" /></Toggle>
				<Toggle aria-label="Underline"><Underline className="size-4" /></Toggle>
			</div>
		),
	},
	{
		id: "toggle-group",
		name: "ToggleGroup",
		category: "Actions",
		blurb: "Group of toggles with single or multiple selection.",
		parts: 1,
		importName: "ToggleGroup",
	},

	/* ----------------------------------------------------------------- Inputs */
	{
		id: "input",
		name: "Input",
		category: "Inputs",
		blurb: "A styled text field with focus, hover and invalid states.",
		parts: 1,
		importName: "Input",
		preview: <Input placeholder="you@example.com" className="w-64" />,
	},
	{
		id: "input-group",
		name: "InputGroup",
		category: "Inputs",
		blurb: "Compose an input with leading/trailing addons or icons.",
		parts: 1,
		importName: "InputGroup",
		preview: (
			<InputGroup className="w-64">
				<Search className="size-4 text-muted" />
				<Input placeholder="Search…" />
			</InputGroup>
		),
	},
	{
		id: "textarea",
		name: "Textarea",
		category: "Inputs",
		blurb: "Multi-line text input with auto-resize support.",
		parts: 1,
		importName: "Textarea",
		preview: <Textarea placeholder="Write a message…" className="w-64" rows={3} />,
	},
	{
		id: "textarea-group",
		name: "TextareaGroup",
		category: "Inputs",
		blurb: "Textarea composed with counters, toolbars or addons.",
		parts: 1,
		importName: "TextareaGroup",
	},
	{
		id: "number-field",
		name: "NumberField",
		category: "Inputs",
		blurb: "Numeric input with increment/decrement and scrub-to-change.",
		parts: 7,
		importName: "NumberField",
		preview: (
			<NumberField.Root defaultValue={3} min={0}>
				<NumberField.Group>
					<NumberField.Decrement><Minus className="size-4" /></NumberField.Decrement>
					<NumberField.Input className="w-16 text-center" />
					<NumberField.Increment><Plus className="size-4" /></NumberField.Increment>
				</NumberField.Group>
			</NumberField.Root>
		),
	},
	{
		id: "otp-field",
		name: "OTPField",
		category: "Inputs",
		blurb: "One-time-password input split into individual character cells.",
		parts: 3,
		importName: "OTPField",
	},
	{
		id: "checkbox",
		name: "Checkbox",
		category: "Inputs",
		blurb: "Binary choice with indeterminate support.",
		parts: 2,
		importName: "Checkbox",
		preview: (
			<label className="flex items-center gap-2.5 text-sm">
				<Checkbox.Root defaultChecked>
					<Checkbox.Indicator />
				</Checkbox.Root>
				Subscribe to updates
			</label>
		),
	},
	{
		id: "checkbox-group",
		name: "CheckboxGroup",
		category: "Inputs",
		blurb: "Manage a set of related checkboxes with a shared value.",
		parts: 1,
		importName: "CheckboxGroup",
	},
	{
		id: "radio",
		name: "Radio",
		category: "Inputs",
		blurb: "A single radio control, used within a RadioGroup.",
		parts: 2,
		importName: "Radio",
	},
	{
		id: "radio-group",
		name: "RadioGroup",
		category: "Inputs",
		blurb: "Mutually-exclusive selection from a list of options.",
		parts: 1,
		importName: "RadioGroup",
		preview: (
			<RadioGroup defaultValue="standard" className="flex flex-col gap-2 text-sm">
				<label className="flex items-center gap-2.5">
					<Radio.Root value="standard"><Radio.Indicator /></Radio.Root>
					Standard shipping
				</label>
				<label className="flex items-center gap-2.5">
					<Radio.Root value="express"><Radio.Indicator /></Radio.Root>
					Express shipping
				</label>
			</RadioGroup>
		),
	},
	{
		id: "switch",
		name: "Switch",
		category: "Inputs",
		blurb: "An on/off toggle with a sliding thumb.",
		parts: 2,
		importName: "Switch",
		preview: (
			<div className="flex items-center gap-3">
				<Switch.Root defaultChecked><Switch.Thumb /></Switch.Root>
				<Switch.Root><Switch.Thumb /></Switch.Root>
			</div>
		),
	},
	{
		id: "slider",
		name: "Slider",
		category: "Inputs",
		blurb: "Pick a value (or range) along a track.",
		parts: 7,
		importName: "Slider",
		preview: (
			<Slider.Root defaultValue={40} className="w-64">
				<Slider.Control>
					<Slider.Track>
						<Slider.Indicator />
						<Slider.Thumb />
					</Slider.Track>
				</Slider.Control>
			</Slider.Root>
		),
	},
	{
		id: "select",
		name: "Select",
		category: "Inputs",
		blurb: "Choose one option from a portalled, positioned dropdown.",
		parts: 17,
		importName: "Select",
	},
	{
		id: "combobox",
		name: "Combobox",
		category: "Inputs",
		blurb: "Filterable select with single/multiple selection and chips.",
		parts: 27,
		importName: "Combobox",
	},
	{
		id: "autocomplete",
		name: "Autocomplete",
		category: "Inputs",
		blurb: "Free-text input with an async-friendly suggestion list.",
		parts: 21,
		importName: "Autocomplete",
	},
	{
		id: "field",
		name: "Field",
		category: "Inputs",
		blurb: "Wire a label, control, description and validation message together.",
		parts: 7,
		importName: "Field",
		preview: (
			<Field.Root className="w-64">
				<Field.Label>Email</Field.Label>
				<Field.Control render={<Input placeholder="you@example.com" />} />
				<Field.Description>We&apos;ll never share it.</Field.Description>
			</Field.Root>
		),
	},
	{
		id: "fieldset",
		name: "Fieldset",
		category: "Inputs",
		blurb: "Group several fields under a shared legend.",
		parts: 2,
		importName: "Fieldset",
		preview: (
			<Fieldset.Root className="w-64">
				<Fieldset.Legend>Billing</Fieldset.Legend>
				<Input placeholder="Card number" />
			</Fieldset.Root>
		),
	},
	{
		id: "form",
		name: "Form",
		category: "Inputs",
		blurb: "Form wrapper with built-in validation and error wiring.",
		parts: 1,
		importName: "Form",
	},

	/* ----------------------------------------------------------- Data display */
	{
		id: "avatar",
		name: "Avatar",
		category: "Data display",
		blurb: "User image with graceful initials fallback.",
		parts: 3,
		importName: "Avatar",
		props: [
			{ name: "size", values: "sm | md | lg", default: "md" },
			{ name: "color", values: "neutral | info | success | warning | error", default: "neutral" },
		],
		preview: (
			<div className="flex gap-2">
				<Avatar.Root><Avatar.Fallback>AK</Avatar.Fallback></Avatar.Root>
				<Avatar.Root color="info"><Avatar.Fallback>JD</Avatar.Fallback></Avatar.Root>
				<Avatar.Root color="success"><Avatar.Fallback>MR</Avatar.Fallback></Avatar.Root>
			</div>
		),
	},
	{
		id: "avatar-group",
		name: "AvatarGroup",
		category: "Data display",
		blurb: "Overlap a set of avatars to show membership at a glance.",
		parts: 1,
		importName: "AvatarGroup",
		preview: (
			<AvatarGroup>
				<Avatar.Root><Avatar.Fallback>AK</Avatar.Fallback></Avatar.Root>
				<Avatar.Root color="info"><Avatar.Fallback>JD</Avatar.Fallback></Avatar.Root>
				<Avatar.Root color="success"><Avatar.Fallback>MR</Avatar.Fallback></Avatar.Root>
				<Avatar.Root color="warning"><Avatar.Fallback>+5</Avatar.Fallback></Avatar.Root>
			</AvatarGroup>
		),
	},
	{
		id: "badge",
		name: "Badge",
		category: "Data display",
		blurb: "A small status dot or count anchored to another element.",
		parts: 2,
		importName: "Badge",
		props: [
			{ name: "status", values: "neutral | info | success | warning | error" },
			{ name: "side", values: "top | bottom", default: "top" },
		],
		preview: (
			<Badge.Root className="inline-flex">
				<Button variant="secondary" size="sm">Inbox</Button>
				<Badge.Indicator status="error" />
			</Badge.Root>
		),
	},
	{
		id: "chip",
		name: "Chip",
		category: "Data display",
		blurb: "Compact label for tags, categories and statuses.",
		parts: 1,
		importName: "Chip",
		props: [
			{ name: "variant", values: "primary | secondary", default: "primary" },
			{ name: "color", values: "neutral | info | success | warning | error", default: "neutral" },
		],
		preview: (
			<div className="flex flex-wrap gap-2">
				<Chip color="info">Info</Chip>
				<Chip color="success">Success</Chip>
				<Chip color="warning">Warning</Chip>
				<Chip color="error">Error</Chip>
			</div>
		),
	},
	{
		id: "card",
		name: "Card",
		category: "Data display",
		blurb: "A surface for grouping related content and actions.",
		parts: 4,
		importName: "Card",
		preview: (
			<Card.Root className="w-64 p-4">
				<Card.Content>
					<Card.Title>Pro plan</Card.Title>
					<Card.Description>Everything you need to ship faster.</Card.Description>
				</Card.Content>
			</Card.Root>
		),
	},
	{
		id: "item",
		name: "Item",
		category: "Data display",
		blurb: "A list row with media, content and trailing actions.",
		parts: 6,
		importName: "Item",
		preview: (
			<Item.Root className="w-64">
				<Item.Media>
					<Avatar.Root color="info"><Avatar.Fallback>JD</Avatar.Fallback></Avatar.Root>
				</Item.Media>
				<Item.Content>
					<Item.Title>Jane Doe</Item.Title>
					<Item.Description>Product designer</Item.Description>
				</Item.Content>
			</Item.Root>
		),
	},
	{
		id: "separator",
		name: "Separator",
		category: "Data display",
		blurb: "A thin divider between content, horizontal or vertical.",
		parts: 1,
		importName: "Separator",
		preview: (
			<div className="w-64 text-sm text-muted">
				<p>Account</p>
				<Separator className="my-2" />
				<p>Billing</p>
			</div>
		),
	},
	{
		id: "meter",
		name: "Meter",
		category: "Data display",
		blurb: "Visualize a measured value within a known range.",
		parts: 5,
		importName: "Meter",
		preview: (
			<Meter.Root value={64} className="w-64">
				<div className="mb-1.5 flex justify-between text-xs text-muted">
					<Meter.Label>Storage</Meter.Label>
					<Meter.Value />
				</div>
				<Meter.Track><Meter.Indicator /></Meter.Track>
			</Meter.Root>
		),
	},
	{
		id: "progress",
		name: "Progress",
		category: "Data display",
		blurb: "Show completion of a task, determinate or indeterminate.",
		parts: 5,
		importName: "Progress",
		preview: (
			<Progress.Root value={68} className="w-64">
				<div className="mb-1.5 flex justify-between text-xs text-muted">
					<Progress.Label>Uploading</Progress.Label>
					<Progress.Value />
				</div>
				<Progress.Track><Progress.Indicator /></Progress.Track>
			</Progress.Root>
		),
	},
	{
		id: "skeleton",
		name: "Skeleton",
		category: "Data display",
		blurb: "Placeholder shimmer while content is loading.",
		parts: 1,
		importName: "Skeleton",
		preview: (
			<div className="flex w-64 flex-col gap-2">
				<Skeleton className="h-4 w-3/4 rounded" />
				<Skeleton className="h-4 w-1/2 rounded" />
			</div>
		),
	},
	{
		id: "spinner",
		name: "Spinner",
		category: "Data display",
		blurb: "An indeterminate loading indicator.",
		parts: 1,
		importName: "Spinner",
		props: [
			{ name: "size", values: "sm | md | lg", default: "md" },
			{ name: "color", values: "current | neutral | info | success | warning | error" },
		],
		preview: (
			<div className="flex items-center gap-4">
				<Spinner />
				<Spinner color="info" />
			</div>
		),
	},
	{
		id: "scroll-area",
		name: "ScrollArea",
		category: "Data display",
		blurb: "Cross-browser custom scrollbars for overflowing content.",
		parts: 6,
		importName: "ScrollArea",
	},

	/* --------------------------------------------------------------- Feedback */
	{
		id: "alert",
		name: "Alert",
		category: "Feedback",
		blurb: "Inline message to communicate status with semantic colors.",
		parts: 6,
		importName: "Alert",
		props: [{ name: "status (on Indicator)", values: "neutral | info | success | warning | error" }],
		preview: (
			<Alert.Root className="w-72">
				<Alert.Indicator status="success" />
				<Alert.Content>
					<Alert.Title>Saved</Alert.Title>
					<Alert.Description>Your changes are live.</Alert.Description>
				</Alert.Content>
			</Alert.Root>
		),
	},
	{
		id: "alert-dialog",
		name: "AlertDialog",
		category: "Feedback",
		blurb: "A modal that interrupts to confirm a destructive action.",
		parts: 11,
		importName: "AlertDialog",
	},
	{
		id: "toast",
		name: "Toast",
		category: "Feedback",
		blurb: "Transient notifications managed through a provider/queue.",
		parts: 10,
		importName: "Toast",
	},
	{
		id: "tooltip",
		name: "Tooltip",
		category: "Feedback",
		blurb: "Contextual hint shown on hover or focus.",
		parts: 8,
		importName: "Tooltip",
		preview: wrapTip(
			<Tooltip.Root>
				<Tooltip.Trigger render={<Button variant="outline">Hover me</Button>} />
				<Tooltip.Portal>
					<Tooltip.Positioner>
						<Tooltip.Popup>
							Helpful context
							<Tooltip.Arrow />
						</Tooltip.Popup>
					</Tooltip.Positioner>
				</Tooltip.Portal>
			</Tooltip.Root>,
		),
	},

	/* --------------------------------------------------------------- Overlays */
	{ id: "dialog", name: "Dialog", category: "Overlays", blurb: "A focused modal layer for tasks and forms.", parts: 10, importName: "Dialog" },
	{ id: "drawer", name: "Drawer", category: "Overlays", blurb: "A panel that slides in from an edge, with swipe-to-close.", parts: 13, importName: "Drawer" },
	{ id: "popover", name: "Popover", category: "Overlays", blurb: "Rich floating content anchored to a trigger.", parts: 11, importName: "Popover" },
	{ id: "preview-card", name: "PreviewCard", category: "Overlays", blurb: "Hover-triggered rich preview, like link cards.", parts: 8, importName: "PreviewCard" },
	{ id: "menu", name: "Menu", category: "Overlays", blurb: "A dropdown menu with items, groups, radios and checkboxes.", parts: 20, importName: "Menu" },
	{ id: "context-menu", name: "ContextMenu", category: "Overlays", blurb: "Right-click menu sharing the Menu anatomy.", parts: 19, importName: "ContextMenu" },
	{ id: "menubar", name: "Menubar", category: "Overlays", blurb: "An application menu bar of coordinated menus.", parts: 1, importName: "Menubar" },

	/* ------------------------------------------------------------- Navigation */
	{
		id: "tabs",
		name: "Tabs",
		category: "Navigation",
		blurb: "Switch between views with an animated active indicator.",
		parts: 5,
		importName: "Tabs",
		preview: (
			<Tabs.Root defaultValue="overview" className="w-72">
				<Tabs.List className="relative">
					<Tabs.Tab value="overview">Overview</Tabs.Tab>
					<Tabs.Tab value="activity">Activity</Tabs.Tab>
					<Tabs.Indicator />
				</Tabs.List>
				<Tabs.Panel value="overview" className="pt-3 text-sm text-muted">A quick snapshot.</Tabs.Panel>
				<Tabs.Panel value="activity" className="pt-3 text-sm text-muted">Recent events.</Tabs.Panel>
			</Tabs.Root>
		),
	},
	{
		id: "accordion",
		name: "Accordion",
		category: "Navigation",
		blurb: "Stacked, collapsible sections of content.",
		parts: 7,
		importName: "Accordion",
		preview: (
			<Accordion.Root className="w-72" defaultValue={["a"]}>
				<Accordion.Item value="a">
					<Accordion.Header>
						<Accordion.Trigger>
							Shipping
							<Accordion.Icon />
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Panel>
						<Accordion.Content className="text-sm text-muted">
							Free over $50, 2–4 business days.
						</Accordion.Content>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion.Root>
		),
	},
	{
		id: "collapsible",
		name: "Collapsible",
		category: "Navigation",
		blurb: "A single show/hide region with animated height.",
		parts: 5,
		importName: "Collapsible",
		preview: (
			<Collapsible.Root className="w-72">
				<Collapsible.Trigger className="flex items-center gap-1 text-sm font-medium">
					<Collapsible.Icon><ChevronRight className="size-4" /></Collapsible.Icon>
					Details
				</Collapsible.Trigger>
				<Collapsible.Panel>
					<Collapsible.Content className="pt-2 text-sm text-muted">
						Hidden content revealed on demand.
					</Collapsible.Content>
				</Collapsible.Panel>
			</Collapsible.Root>
		),
	},
	{
		id: "breadcrumbs",
		name: "Breadcrumbs",
		category: "Navigation",
		blurb: "Show the user's location in a hierarchy.",
		parts: 7,
		importName: "Breadcrumbs",
		preview: (
			<Breadcrumbs.Root>
				<Breadcrumbs.List className="flex items-center gap-1.5 text-sm text-muted">
					<Breadcrumbs.Item><Breadcrumbs.Link href="#">Home</Breadcrumbs.Link></Breadcrumbs.Item>
					<Breadcrumbs.Separator />
					<Breadcrumbs.Item><Breadcrumbs.Link href="#">Docs</Breadcrumbs.Link></Breadcrumbs.Item>
					<Breadcrumbs.Separator />
					<Breadcrumbs.Item><Breadcrumbs.Page>Components</Breadcrumbs.Page></Breadcrumbs.Item>
				</Breadcrumbs.List>
			</Breadcrumbs.Root>
		),
	},
	{ id: "pagination", name: "Pagination", category: "Navigation", blurb: "Navigate paged data with first/prev/next controls.", parts: 7, importName: "Pagination" },
	{ id: "navigation-menu", name: "NavigationMenu", category: "Navigation", blurb: "A site navigation menu with rich, animated panels.", parts: 13, importName: "NavigationMenu" },
]

export const CATEGORIES: Category[] = [
	"Actions",
	"Inputs",
	"Data display",
	"Feedback",
	"Overlays",
	"Navigation",
]

export function getComponent(id: string) {
	return COMPONENTS.find((c) => c.id === id)
}
