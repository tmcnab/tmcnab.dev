import { CSSProperties, ReactNode } from 'react'
import Background from './Background'
import Header from './Header'

export interface ModalProps {
	children: ReactNode
	open: boolean
	title: string
}

const style: CSSProperties = {
	backgroundColor: 'black',
	border: '1px solid white',
	left: '10vw',
	opacity: 1,
	position: 'absolute',
	top: '10vh',
	zIndex: 10010,
}

export default function Modal({ children, open, title }: ModalProps) {
	return (
		<Background open={open}>
			<div style={style}>
				<Header title={title} />
				{children}
			</div>
		</Background>
	)
}