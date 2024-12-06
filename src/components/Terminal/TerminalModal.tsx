import Input from "./Input"
import Modal from "../Modal/Modal"
import Output from "./Output"
import Terminal from './Terminal'

export interface TerminalModalProps {
	onClose: () => void
	open: boolean
}

export default function TerminalModal(props: TerminalModalProps) {
	const term = new Terminal()
	const onSubmit = (value: string) => term.enqueue(value)

	return (
		<Modal onClose={props.onClose} open={props.open} title='System'>
			<Output value={term.output} />
			<Input history={term.history} onSubmit={onSubmit} />
		</Modal>
	)
}