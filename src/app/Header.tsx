import { Cpu, GitHub, HelpCircle, Linkedin } from "react-feather"
import Flex from "@/components/Flex"
import Link from 'next/link'

export default function Header() {
	return (
		<header>
			<Flex>
				<div>
					<Link className='header-title' href='/'>tmcnab.dev</Link>
					<div className='header-subtitle'>engineer / husband / socialist</div>
				</div>
				<Flex justifyContent='start' vertical>
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