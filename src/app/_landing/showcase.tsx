"use client"

import { useState } from "react"
import { Bell, Check, Heart, Search, Star } from "lucide-react"

import {
	Accordion,
	Avatar,
	AvatarGroup,
	Badge,
	Button,
	Card,
	Checkbox,
	Chip,
	Progress,
	Slider,
	Switch,
	Tabs,
	Tooltip,
} from "@/ui/components"

import { Reveal } from "./ui"

function DemoCard({
	title,
	subtitle,
	children,
	delay = 0,
	className = "",
}: {
	title: string
	subtitle: string
	children: React.ReactNode
	delay?: number
	className?: string
}) {
	return (
		<Reveal delay={delay} className={className}>
			<Card.Root className="spotlight group h-full rounded-2xl border border-separator bg-surface p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
				<div className="mb-4 flex items-baseline justify-between gap-3">
					<div>
						<h3 className="text-sm font-semibold text-foreground">{title}</h3>
						<p className="text-xs text-muted">{subtitle}</p>
					</div>
				</div>
				<div className="flex min-h-28 flex-col items-start justify-center gap-3">
					{children}
				</div>
			</Card.Root>
		</Reveal>
	)
}

export function Showcase() {
	const [slider, setSlider] = useState<number>(58)
	const [checked, setChecked] = useState(true)

	return (
		<Tooltip.Provider>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{/* Buttons */}
				<DemoCard title="Buttons" subtitle="5 variants · 3 sizes" delay={0}>
					<div className="flex flex-wrap gap-2">
						<Button variant="primary" className="jelly-hover">Primary</Button>
						<Button variant="secondary" className="jelly-hover">Secondary</Button>
						<Button variant="outline" className="jelly-hover">Outline</Button>
					</div>
					<div className="flex flex-wrap gap-2">
						<Button variant="ghost" size="sm" className="jelly-hover">Ghost</Button>
						<Button variant="error" size="sm" className="jelly-hover">Delete</Button>
						<Button variant="primary" size="sm" iconOnly className="jelly-hover">
							<Heart className="size-4" />
						</Button>
					</div>
				</DemoCard>

				{/* Switch + Checkbox */}
				<DemoCard title="Toggles" subtitle="Switch · Checkbox" delay={60}>
					<div className="flex items-center gap-3">
						<Switch.Root defaultChecked>
							<Switch.Thumb />
						</Switch.Root>
						<Switch.Root>
							<Switch.Thumb />
						</Switch.Root>
						<span className="text-sm text-muted">Notifications</span>
					</div>
					<label className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground">
						<Checkbox.Root checked={checked} onCheckedChange={setChecked}>
							<Checkbox.Indicator />
						</Checkbox.Root>
						Accept terms
					</label>
				</DemoCard>

				{/* Slider */}
				<DemoCard title="Slider" subtitle="Controlled value" delay={120}>
					<div className="w-full">
						<div className="mb-2 flex justify-between text-xs text-muted">
							<span>Volume</span>
							<span className="font-mono text-foreground">{slider}%</span>
						</div>
						<Slider.Root
							value={slider}
							onValueChange={(v) => setSlider(v as number)}
							min={0}
							max={100}
						>
							<Slider.Control>
								<Slider.Track>
									<Slider.Indicator />
									<Slider.Thumb />
								</Slider.Track>
							</Slider.Control>
						</Slider.Root>
					</div>
				</DemoCard>

				{/* Progress */}
				<DemoCard title="Progress" subtitle="Determinate" delay={0}>
					<div className="w-full space-y-4">
						<Progress.Root value={72}>
							<div className="mb-1.5 flex justify-between text-xs text-muted">
								<Progress.Label>Uploading</Progress.Label>
								<Progress.Value />
							</div>
							<Progress.Track>
								<Progress.Indicator />
							</Progress.Track>
						</Progress.Root>
						<Progress.Root value={38}>
							<Progress.Track>
								<Progress.Indicator />
							</Progress.Track>
						</Progress.Root>
					</div>
				</DemoCard>

				{/* Avatars + badge */}
				<DemoCard title="Avatars" subtitle="Group · status badge" delay={60}>
					<AvatarGroup>
						<Avatar.Root>
							<Avatar.Fallback>AK</Avatar.Fallback>
						</Avatar.Root>
						<Avatar.Root color="info">
							<Avatar.Fallback>JD</Avatar.Fallback>
						</Avatar.Root>
						<Avatar.Root color="success">
							<Avatar.Fallback>MR</Avatar.Fallback>
						</Avatar.Root>
						<Avatar.Root color="warning">
							<Avatar.Fallback>+5</Avatar.Fallback>
						</Avatar.Root>
					</AvatarGroup>
					<Badge.Root className="inline-flex">
						<Button variant="secondary" size="sm" iconOnly className="jelly-hover">
							<Bell className="size-4" />
						</Button>
						<Badge.Indicator status="error" />
					</Badge.Root>
				</DemoCard>

				{/* Chips */}
				<DemoCard title="Chips & Badges" subtitle="Semantic colors" delay={120}>
					<div className="flex flex-wrap gap-2">
						<Chip color="info">Info</Chip>
						<Chip color="success">Success</Chip>
						<Chip color="warning">Warning</Chip>
						<Chip color="error">Error</Chip>
					</div>
					<div className="flex flex-wrap gap-2">
						<Chip variant="secondary" color="info">
							<Star className="size-3.5" /> Featured
						</Chip>
						<Chip variant="secondary" color="success">
							<Check className="size-3.5" /> Verified
						</Chip>
					</div>
				</DemoCard>

				{/* Tabs */}
				<DemoCard title="Tabs" subtitle="Animated indicator" delay={0} className="sm:col-span-2 lg:col-span-1">
					<Tabs.Root defaultValue="overview" className="w-full">
						<Tabs.List className="relative">
							<Tabs.Tab value="overview">Overview</Tabs.Tab>
							<Tabs.Tab value="activity">Activity</Tabs.Tab>
							<Tabs.Tab value="settings">Settings</Tabs.Tab>
							<Tabs.Indicator />
						</Tabs.List>
						<Tabs.Panel value="overview" className="pt-3 text-sm text-muted">
							A quick snapshot of everything that matters.
						</Tabs.Panel>
						<Tabs.Panel value="activity" className="pt-3 text-sm text-muted">
							Every recent event, neatly in one place.
						</Tabs.Panel>
						<Tabs.Panel value="settings" className="pt-3 text-sm text-muted">
							Fine-tune the experience to your liking.
						</Tabs.Panel>
					</Tabs.Root>
				</DemoCard>

				{/* Tooltip */}
				<DemoCard title="Tooltip" subtitle="Hover to reveal" delay={60}>
					<div className="flex w-full items-center justify-center gap-3 py-2">
						<Tooltip.Root>
							<Tooltip.Trigger
								render={
									<Button variant="outline" iconOnly className="jelly-hover">
										<Search className="size-4" />
									</Button>
								}
							/>
							<Tooltip.Portal>
								<Tooltip.Positioner>
									<Tooltip.Popup>
										Search everything
										<Tooltip.Arrow />
									</Tooltip.Popup>
								</Tooltip.Positioner>
							</Tooltip.Portal>
						</Tooltip.Root>
						<Tooltip.Root>
							<Tooltip.Trigger
								render={
									<Button variant="outline" iconOnly className="jelly-hover">
										<Bell className="size-4" />
									</Button>
								}
							/>
							<Tooltip.Portal>
								<Tooltip.Positioner>
									<Tooltip.Popup>
										3 new notifications
										<Tooltip.Arrow />
									</Tooltip.Popup>
								</Tooltip.Positioner>
							</Tooltip.Portal>
						</Tooltip.Root>
					</div>
				</DemoCard>

				{/* Accordion */}
				<DemoCard title="Accordion" subtitle="Collapsible sections" delay={120}>
					<Accordion.Root className="w-full" defaultValue={["a"]}>
						<Accordion.Item value="a">
							<Accordion.Header>
								<Accordion.Trigger>
									Is it accessible?
									<Accordion.Icon />
								</Accordion.Trigger>
							</Accordion.Header>
							<Accordion.Panel>
								<Accordion.Content className="text-sm text-muted">
									Yes — built on Base UI primitives with full keyboard and ARIA support.
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion.Item>
						<Accordion.Item value="b">
							<Accordion.Header>
								<Accordion.Trigger>
									Is it themeable?
									<Accordion.Icon />
								</Accordion.Trigger>
							</Accordion.Header>
							<Accordion.Panel>
								<Accordion.Content className="text-sm text-muted">
									Every token is OKLCH and overridable with CSS variables.
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion.Item>
					</Accordion.Root>
				</DemoCard>
			</div>
		</Tooltip.Provider>
	)
}
