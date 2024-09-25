import { CSSProperties, ReactNode } from 'react'
import Flex from '../Flex'

export interface CardProps {
	children: ReactNode
	title: ReactNode
}

const style: CSSProperties = {
	border: '1px solid white',
	borderRadius: '0.5rem',
	margin: '1rem 0 1rem 0',
	width: '100%',
}

export default function Card (props: CardProps) {
	return (
		<section style={style}>
			<header style={{ marginBottom: 0 }}>
				<Flex>
					<strong>{props.title}</strong>
				</Flex>
			</header>
			<div style={{ margin: '1rem' }}>
				{props.children}
			</div>
		</section>
	)
}