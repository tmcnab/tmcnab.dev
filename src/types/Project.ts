import { ReactNode } from "react"

export interface Project {
	children: ReactNode
	description: string
	slug?: string
	tags: string[]
	title: string
}
