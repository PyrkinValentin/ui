const SPACES_REGEX = /\s+/

type GetInitialsOptions = {
	fallback?: string
	maxOneWordLength?: number
	maxLength?: number
}

export const getAvatarInitials = (name?: string, options: GetInitialsOptions = {}): string => {
	const {
		fallback = "?",
		maxOneWordLength = 1,
		maxLength = 2,
	} = options

	if (
		!name ||
		name.length === 0 ||
		maxOneWordLength <= 0 ||
		maxLength <= 0
	) return fallback

	const trimmed = name.trim()

	if (!trimmed) return fallback

	const words = trimmed.split(SPACES_REGEX)

	if (words.length === 1) {
		const chars = [...words[0]]
		const limitedChars = chars.slice(0, maxOneWordLength)

		const firstChar = limitedChars[0].toUpperCase()
		const restChars = limitedChars
			.slice(1)
			.join("")
			.toLowerCase()

		return firstChar + restChars
	}

	let initials = ""

	for (let i = 0; i < words.length; i++) {
		const word = words[i]
		const [firstChar] = [...word]

		initials += firstChar

		if (initials.length === maxLength) break
	}

	return initials.toUpperCase()
}