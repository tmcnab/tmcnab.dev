export interface HeaderProps {
	title: string
}

export default function Header (props: HeaderProps) {
	return (
		<header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0 }}>
			<span>{props.title}</span>
			<span>x</span>
		</header>
	)
}