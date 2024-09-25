import { ReactNode } from "react"

export interface Project {
	children: ReactNode
	description: string
	tags: string[]
	title: string
}
