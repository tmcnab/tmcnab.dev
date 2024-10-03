import Modal from "../Modal/Modal"
import TerminalInput from "./TerminalInput"
import TerminalLog from "./TerminalLog"

export interface TerminalModalProps {
	onClose: () => void
	open: boolean
}

export default function TerminalModal(props: TerminalModalProps) {
	return (
		<Modal onClose={props.onClose} open={props.open} title='System'>
			<TerminalLog />
			<TerminalInput />
		</Modal>
	)
}