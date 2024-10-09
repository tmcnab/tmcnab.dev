const style = {
	border: '1px solid white',
	borderRadius: '0.25rem',
	fontSize: '1rem',
}

export interface InputProps {
	onChange: (value: string) => void
	placeholder?: string
}

export default function Input (props: InputProps) {
	return <input style={style} />
}