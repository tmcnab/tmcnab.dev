import { CSSProperties } from 'react'
import { X } from 'react-feather'

export interface HeaderProps {
	onClick: () => void,
	title: string,
}

const style: CSSProperties = {
	alignItems: 'center',
	borderBottom: '1px solid white',
	display: 'flex',
	fontFamily: 'monospace',
	justifyContent: 'space-between',
	padding: '0.5rem 0.5rem 0.5rem 0.5rem',
	textTransform: 'uppercase',
}

export default function Header (props: HeaderProps) {
	return (
		<header style={style}>
			<strong>{props.title}</strong>
			<X onClick={props.onClick} style={{ cursor: 'pointer' }} />
		</header>
	)
}