import { CSSProperties, ReactNode } from "react"

export interface FlexProps {
	children: ReactNode
	gap?: string,
	justifyContent?: 'space-around' | 'space-between' | 'center' | 'end' | 'space-evenly' | 'start'
	vertical?: boolean
}

export default function Flex ({ children, gap = '1rem', justifyContent = 'space-between', vertical = false }: FlexProps) {
	const style: CSSProperties = {
		display: 'flex',
		flexDirection: vertical ? 'column' : 'row',
		gap,
		justifyContent,
	}

	return <div children={children} style={style} />
}