import './layout.css'
import "./globals.css"
import { Cpu, GitHub, HelpCircle, Linkedin } from 'react-feather'
import { ReactNode } from "react"
import Flex from "@/components/Flex"
import Link from 'next/link'
import TerminalButton from '@/components/Terminal/TerminalButton'
import ThemeButton from '@/components/ThemeButton'
import type { Metadata } from "next"
import Header from './Header'
import Footer from './Footer'

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
				<main>
					{children}
				</main>
				<Footer />
			</body>
		</html >
	)
}
