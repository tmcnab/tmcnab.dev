import { Cpu, GitHub, HelpCircle, Linkedin } from "react-feather"
import Flex from "@/components/Flex"
import Link from 'next/link'

export default function Header() {
	return (
		<header style={{ paddingBottom: '1rem' }}>
			<Flex>
				<div>
					<Link className='header-title' href='/'>tmcnab.dev</Link>
					<div className='header-subtitle'>
						<a href='https://en.wikipedia.org/wiki/I_know_that_I_know_nothing' target='_blank'>
							scio me nihil scire
						</a>
					</div>
				</div>
				<Flex justifyContent='center' vertical>
					<Flex>
						<Link href='/projects'>
							<Cpu />
						</Link>
						<Link href='/about'>
							<HelpCircle />
						</Link>
						<Link href='https://www.linkedin.com/in/tmcnab/'>
							<Linkedin />
						</Link>
						<Link href='https://github.com/tmcnab'>
							<GitHub />
						</Link>
					</Flex>
				</Flex>
			</Flex>
		</header>
	)
}