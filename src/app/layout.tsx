import "./globals.css"
import { ReactNode } from "react"
import Footer from './Footer'
import Header from './Header'
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "tmcnab.dev • Tristan McNab's internet home",
}

export interface Props {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<html>
			<body>
				<Header />
				<main style={{ paddingBottom: '1rem', paddingTop: '1rem' }}>
					{children}
				</main>
				<Footer />
			</body>
		</html >
	)
}
