"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "@teispace/next-themes"
import { Check, Copy, Moon, Sun } from "lucide-react"

/* ---- Scroll reveal -------------------------------------------------- */
export function Reveal({
	children,
	delay = 0,
	className = "",
	as: Tag = "div",
}: {
	children: React.ReactNode
	delay?: number
	className?: string
	as?: keyof React.JSX.IntrinsicElements
}) {
	const ref = useRef<HTMLElement | null>(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						setVisible(true)
						io.unobserve(e.target)
					}
				})
			},
			{ threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
		)
		io.observe(el)
		return () => io.disconnect()
	}, [])

	const Component = Tag as React.ElementType
	return (
		<Component
			ref={ref as never}
			data-visible={visible}
			style={{ ["--reveal-delay" as string]: `${delay}ms` }}
			className={`reveal ${className}`}
		>
			{children}
		</Component>
	)
}

/* ---- Theme toggle --------------------------------------------------- */
export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])

	const isDark = resolvedTheme === "dark"

	return (
		<button
			type="button"
			aria-label="Toggle theme"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="jelly-hover inline-flex size-9 items-center justify-center rounded-md border border-separator bg-surface text-foreground transition hover:bg-surface-hover"
		>
			{mounted ? (
				isDark ? <Sun className="size-4" /> : <Moon className="size-4" />
			) : (
				<span className="size-4" />
			)}
		</button>
	)
}

/* ---- Copy install command ------------------------------------------ */
export function CopyInstall({ command = "npm i one-ui" }: { command?: string }) {
	const [copied, setCopied] = useState(false)

	const copy = () => {
		navigator.clipboard?.writeText(command).then(() => {
			setCopied(true)
			setTimeout(() => setCopied(false), 1600)
		})
	}

	return (
		<button
			type="button"
			onClick={copy}
			className="group jelly-hover inline-flex items-center gap-3 rounded-lg border border-separator bg-surface px-4 py-2.5 font-mono text-sm text-foreground shadow-sm transition hover:bg-surface-hover"
		>
			<span className="text-muted select-none">$</span>
			<span>{command}</span>
			<span className="ml-1 inline-flex size-5 items-center justify-center text-muted transition group-hover:text-foreground">
				{copied ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
			</span>
		</button>
	)
}

/* ---- "Scrolled" hook for sticky nav -------------------------------- */
export function useScrolled(offset = 8) {
	const [scrolled, setScrolled] = useState(false)
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > offset)
		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [offset])
	return scrolled
}
