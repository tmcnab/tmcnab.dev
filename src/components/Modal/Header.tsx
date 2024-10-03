import { CSSProperties } from 'react'
import { X } from 'react-feather'

export interface HeaderProps {
	onClick: () => void,
	title: string,
}

const style: CSSProperties = {
	borderBottom: '1px solid white',
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: 0,
}

export default function Header (props: HeaderProps) {
	return (
		<header style={style}>
			<strong>{props.title}</strong>
			<X onClick={props.onClick} style={{ cursor: 'pointer' }} />
		</header>
	)
}