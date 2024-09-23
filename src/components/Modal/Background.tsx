'use client'

import { CSSProperties, ReactNode } from "react"

export interface ModalProps {
	children: ReactNode
	open: boolean
	setOpen: (value: boolean) => void
}

export default function Modal(props: ModalProps) {
	const onClick = () => 
		props.setOpen(false)

	const style: CSSProperties = {
		backgroundColor: 'gray',
		display: props.open ? 'block' : 'none',
		height: '100vh',
		left: 0,
		opacity: 0.9,
		position: 'fixed',
		top: 0,
		width: '100vw',
		zIndex: 10000,
	}

	return <div {...props} onClick={onClick} style={style} />
}