'use client'

import Background from '@/components/Modal/Background'
import { CSSProperties } from 'react'
import Header from './Header'
import Footer from './Footer'

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
				<pre style={{ border: '1px solid gray', minHeight: '60vh', padding: '1rem' }}>BOOTING SYSTEM</pre>
				<Footer />
			</div>
		</Background>
	)
}