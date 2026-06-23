import { getComponent } from "@/shared/registry"

/**
 * Renders the live preview for a component from the shared registry.
 * Both the docs page and Storybook consume the same source of truth.
 */
export function Demo({ id }: { id: string }) {
	const doc = getComponent(id)
	if (!doc) return <span>Unknown component: {id}</span>
	if (doc.preview) return <>{doc.preview}</>
	return (
		<div style={{ maxWidth: 360, textAlign: "center", color: "var(--color-muted)" }}>
			<p style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>{doc.name}</p>
			<p style={{ fontSize: 14 }}>{doc.blurb}</p>
			<p style={{ fontSize: 13, marginTop: 8 }}>
				Compound component with {doc.parts} parts — compose from{" "}
				<code>{doc.importName}</code>.
			</p>
		</div>
	)
}
