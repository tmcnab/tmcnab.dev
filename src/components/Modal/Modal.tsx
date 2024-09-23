'use client'

import Background from '@/components/Modal/Background'
import { CSSProperties } from 'react'
import Header from './Header'

export interface ModalProps {
	open: boolean
	title: string
}

const style: CSSProperties = {
	backgroundColor: 'black',
	border: '1px solid white',
	height: '80vh',
	left: '10vw',
	opacity: 1,
	padding: '1rem',
	position: 'absolute',
	top: '10vh',
	width: '80vw',
	zIndex: 10010,
}

export default function Modal({ open, title }: ModalProps) {
	console.log(`[Modal open={props.open}]`)

	return (
		<Background open={open}>
			<div style={style}>
				<Header title={title} />
				<pre style={{ minHeight: '60vh' }}>BOOTING SYSTEM</pre>
				<footer>
					<input style={{border: '1px solid white'}} />
				</footer>
			</div>
		</Background>
	)
}