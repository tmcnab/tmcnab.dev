'use client'

import Background from '@/components/Modal/Background'
import { CSSProperties } from 'react'

export interface ModalProps {
	open: boolean
}

const style: CSSProperties = {
	backgroundColor: 'black',
	border: '1px solid white',
	height: '80vh',
	left: '10vw',
	position: 'absolute',
	top: '10vh',
	width: '80vw',
	zIndex: 10001,
	opacity: 1,
}

export default function Modal({ open }: ModalProps) {
	console.log(`[Modal open={props.open}]`)

	return (
		<Background open={open}>
			<div style={style}>
				<header>
				</header>
				<h2>Hello World</h2>
			</div>
		</Background>
	)
}