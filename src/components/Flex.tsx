import { CSSProperties, ReactNode } from "react"

export interface FlexProps {
	children: ReactNode
	vertical?: boolean
}

export default function Flex ({ children, vertical = false }: FlexProps) {
	const style: CSSProperties = {
		display: 'flex',
		flexDirection: vertical ? 'column' : 'row',
		gap: '1rem',
		justifyContent: 'space-between',
	}

	return <div children={children} style={style} />
}