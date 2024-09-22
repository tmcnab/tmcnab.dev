import "./globals.css"
import { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
	description: "Generated by create next app",
	title: "Create Next App",
}


export interface Props {
	children: ReactNode
}

export default function Layout ({ children }: Props) {
	return (
		<html>
			<body>
				{children}
			</body>
		</html>
	)
}