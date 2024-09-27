import './layout.css'
import "./globals.css"
import { GitHub } from 'react-feather'
import { ReactNode } from "react"
import ArticleSelect from '@/components/ArticleSelect'
import Button from '@/components/Button'
import Flex from "@/components/Flex"
import Link from 'next/link'
import PageSelect from '@/components/PageSelect'
import TerminalButton from '@/components/TerminalButton'
import type { Metadata } from "next"
import ThemeButton from '@/components/ThemeButton'

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
								<Button onClick={() => {}}>
									<GitHub />
								</Button>
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
