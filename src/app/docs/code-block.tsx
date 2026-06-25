"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export function CodeBlock({
	code,
	className = "",
}: {
	code: string
	className?: string
}) {
	const [copied, setCopied] = useState(false)

	const copy = () => {
		navigator.clipboard?.writeText(code).then(() => {
			setCopied(true)
			setTimeout(() => setCopied(false), 1600)
		})
	}

	return (
		<div className={`group/code relative ${className}`}>
			<pre className="overflow-x-auto rounded-lg bg-eclipse px-3 py-2.5 pr-10 font-mono text-xs leading-relaxed text-snow">
				<code>{code}</code>
			</pre>
			<button
				type="button"
				onClick={copy}
				aria-label="Copy code"
				className="jelly-hover absolute right-2 top-2 inline-flex size-6 items-center justify-center rounded-md text-snow/60 transition hover:bg-white/10 hover:text-snow"
			>
				{copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
			</button>
		</div>
	)
}
