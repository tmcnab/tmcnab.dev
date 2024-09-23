export interface HeaderProps {
	title: string
}

export default function Header (props: HeaderProps) {
	return (
		<header style={{ display: 'flex', justifyContent: 'space-between' }}>
			<span>{props.title}</span>
		</header>
	)
}