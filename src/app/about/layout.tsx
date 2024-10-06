import { ReactNode } from "react"
import Flex from '@/components/Flex'
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "tmcnab.dev • About Me",
}

export interface Props {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<Flex gap='2rem'>
			<article style={{ flex: 2, textAlign: 'justify' }}>
				{children}
			</article>
			<aside style={{ flex: 1 }}>Photo Grid</aside>
		</Flex>
	)
}
