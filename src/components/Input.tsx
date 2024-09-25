const style = {
	border: '1px solid white',
}

export interface InputProps {
	placeholder?: string
}

export default function Input (props: InputProps) {
	return <input style={style} {...props} />
}