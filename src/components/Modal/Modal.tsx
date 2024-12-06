import { CSSProperties, ReactNode } from 'react'
import Background from './Background'
import Header from './Header'

export interface ModalProps {
	children: ReactNode
	open: boolean
	onClose: () => void
	title: string
}

const style: CSSProperties = {
	border: '1px solid white',
	left: 'calc(50% - 386px)',
	opacity: 1,
	position: 'absolute',
	top: '10vh',
	zIndex: 10010,
}

export default function Modal({ children, onClose, open, title }: ModalProps) {
	return (
		<Background open={open}>
			<div style={style}>
				<Header onClick={onClose} title={title} />
				{children}
			</div>
		</Background>
	)
}