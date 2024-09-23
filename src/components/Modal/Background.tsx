'use client'

import { CSSProperties, ReactNode } from "react"

export interface ModalProps {
	children: ReactNode
	open: boolean
}

export default function Modal(props: ModalProps) {
	const style: CSSProperties = {
		backgroundColor: 'gray',
		display: props.open ? 'block' : 'none',
		height: '100vh',
		left: 0,
		opacity: 0.75,
		position: 'fixed',
		top: 0,
		width: '100vw',
		zIndex: 10000,
	}

	return <div {...props} style={style} />
}