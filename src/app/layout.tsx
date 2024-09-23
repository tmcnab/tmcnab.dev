import './layout.css'
import "./globals.css"
import { GitHub, Terminal } from 'react-feather'
import { ReactNode } from "react"
import ArticleSelect from '@/components/ArticleSelect'
import Button from '@/components/Button'
import Flex from "@/components/Flex"
import Link from 'next/link'
import PageSelect from '@/components/PageSelect'
import type { Metadata } from "next"
import TerminalButton from '@/components/TerminalButton'

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
								<Button>
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
					<TerminalButton />
				</footer>
			</body>
		</html >
	)
}
