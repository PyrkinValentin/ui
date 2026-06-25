import { ImageResponse } from "next/og"

export const alt = "One UI — the React UI kit that feels alive"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "80px",
					background: "#0a0a0b",
					color: "#fafafa",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: 20 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: 64,
							height: 64,
							borderRadius: 16,
							background: "#2f7de1",
							color: "#fff",
							fontSize: 38,
							fontWeight: 700,
						}}
					>
						1
					</div>
					<div style={{ fontSize: 34, fontWeight: 600 }}>One UI</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
					<div style={{ display: "flex", fontSize: 78, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
						The React UI kit
					</div>
					<div style={{ display: "flex", fontSize: 78, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
						<span>that feels&nbsp;</span>
						<span style={{ color: "#5aa2f0" }}>alive</span>
						<span>.</span>
					</div>
				</div>

				<div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#9ca3af" }}>
					<span>52 components</span>
					<span style={{ color: "#3f3f46" }}>•</span>
					<span>Built on Base UI</span>
					<span style={{ color: "#3f3f46" }}>•</span>
					<span>Zero runtime CSS</span>
				</div>
			</div>
		),
		size,
	)
}
