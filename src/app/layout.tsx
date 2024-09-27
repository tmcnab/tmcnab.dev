import './layout.css'
import "./globals.css"
import { GitHub, HelpCircle, Home } from 'react-feather'
import { ReactNode } from "react"
import ArticleSelect from '@/components/ArticleSelect'
import Flex from "@/components/Flex"
import Link from 'next/link'
import PageSelect from '@/components/PageSelect'
import TerminalButton from '@/components/TerminalButton'
import ThemeButton from '@/components/ThemeButton'
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
				<header>
					<Flex>
						<div>
							<Link className='header-title' href='/'>tmcnab.dev</Link>
							<div className='header-subtitle'>engineer / husband / socialist</div>
						</div>
						<Flex justifyContent='start' vertical>
							<Flex>
								<PageSelect />
								<ArticleSelect />
								<Link href='/'>
									<Home />
								</Link>
								<Link href='/about'>
									<HelpCircle />
								</Link>
								<Link href='https://github.com/tmcnab'>
									<GitHub />
								</Link>
							</Flex>
						</Flex>
					</Flex>
				</header>
				<main>
					{children}
				</main>
				<footer>
					<Flex>
						<TerminalButton />
						<ThemeButton />
					</Flex>
				</footer>
			</body>
		</html >
	)
}
