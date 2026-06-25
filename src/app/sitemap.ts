import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://one-ui.example"

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date()
	return [
		{ url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
		{ url: `${siteUrl}/docs`, lastModified, changeFrequency: "weekly", priority: 0.8 },
	]
}
