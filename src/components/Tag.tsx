import { CSSProperties } from "react"

export interface TagProps {
	title: string
}

export default function Tag(props: TagProps) {	
	const style: CSSProperties = {
		borderColor: 'white',
		borderRadius: '0.25rem',
		borderStyle: 'solid',
		borderWidth: 1,
		padding: '0.5rem',
		fontSize: 'smaller',
		textTransform: 'uppercase',
	}

	return <span style={style}>{props.title}</span>
}