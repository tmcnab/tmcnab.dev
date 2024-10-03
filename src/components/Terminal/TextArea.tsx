import { CSSProperties } from "react"

const textareaStyle: CSSProperties = {
	border: 0,
	borderRadius: 0,
	marginBottom: '1rem',
	marginLeft: '1rem',
	marginRight: '1rem',
	minHeight: '1ch',
	minWidth: '80ch',
	resize: 'none',
}

export default function TextArea () {
	return <textarea autoFocus rows={1} style={textareaStyle} />
}