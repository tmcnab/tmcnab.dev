import { CSSProperties, ReactNode } from "react"

export interface FlexProps {
	children: ReactNode
	justifyContent?: 'space-around' | 'space-between' | 'center' | 'end' | 'space-evenly' | 'start'
	vertical?: boolean
}

export default function Flex ({ children, justifyContent = 'space-between', vertical = false }: FlexProps) {
	const style: CSSProperties = {
		display: 'flex',
		flexDirection: vertical ? 'column' : 'row',
		justifyContent,
		gap: '1rem',
	}

	return <div children={children} style={style} />
}