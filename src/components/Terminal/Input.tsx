import { CSSProperties, InputHTMLAttributes, KeyboardEventHandler, useRef, useState } from "react"

export interface InputProps {
	history: string[]
	onSubmit: (value: string) => void
}

export default function Input ({ onSubmit }: InputProps) {
	const ref = useRef(null)
	const [tempValue, setTempValue] = useState<string>("")

	const onKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
		console.log(`onKeyUp code=${event.code} key=${event.key} type=${event.charCode}`)
		if (event.code.startsWith('Key') || event.code.startsWith('Digit')) {
			setTempValue(`${tempValue}${event.key}`)
		}
		if (event.code === 'Enter') {
			onSubmit(tempValue)
			setTempValue("")
		}
	}

	const style: CSSProperties = {
		border: 0,
		fontFamily: 'monospace',
		fontSize: 16,
		height: 16,
		outline: 'none',
		padding: 0,
		width: '80ch',
	}

	const props: InputHTMLAttributes<HTMLInputElement> = {
		autoFocus: true,
		onKeyUp,
		style,
	}

	return <input ref={ref} {...props} />
}