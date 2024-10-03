import { CSSProperties } from "react"

const preStyle: CSSProperties = {
	marginLeft: '1rem',
	marginRight: '1rem',
	marginTop: '1rem',
	minHeight: '24ch',
	minWidth: '80ch',
}

export default function Pre () {
	return <pre style={preStyle} />
}