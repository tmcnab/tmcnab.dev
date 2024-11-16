import { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "tmcnab.dev › Projects",
}

export interface Props {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	return children
}
