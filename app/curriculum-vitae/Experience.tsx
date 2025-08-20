export type Experience = {
	company: string
	description: string
	id: string
	end: {
		month: number,
		year: number,
	} | null
	location: string
	start: {
		month: number,
		year: number,
	}
	skills: string[]
	role: string
}