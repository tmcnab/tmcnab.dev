import { CSSProperties } from "react"

export interface OutputProps {
	value: string
}

const style: CSSProperties = {
	border: 0,
	fontFamily: 'monospace',
	fontSize: 16,
	height: '24ch',
	outline: 'none',
	padding: 0,
	width: '80ch',
}

export default function Output ({ value }: OutputProps) {
	const props = {
		children: value,
		style,
	}

	console.log(`Output value=${value}`)

	return <div {...props} />
}