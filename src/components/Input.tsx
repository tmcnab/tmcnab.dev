import { CSSProperties } from "react"

export interface InputProps {
	placeholder?: string
	style?: CSSProperties
}

export default function Input (props: InputProps) {
	const style = {
		...props.style,
		border: '1px solid white',
		borderRadius: '0.25rem',
		fontSize: '1rem',
	}

	return <input {...props} style={style} />
}