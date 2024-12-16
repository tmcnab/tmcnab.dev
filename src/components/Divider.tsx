import { CSSProperties } from "react"

const style: CSSProperties = {
	display: 'block',
	marginBottom: '0.5rem',
	marginTop: '0.5rem',
	textAlign: 'center',
	width: '100%',
}

export default function Divider () {
	return <code style={style}>{`<//>`}</code>
}