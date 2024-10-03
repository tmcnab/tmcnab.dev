import Modal from "../Modal/Modal"
import Pre from "./Pre"
import TextArea from "./TextArea"

export interface TerminalModalProps {
	onClose: () => void
	open: boolean
}

export default function TerminalModal(props: TerminalModalProps) {
	return (
		<Modal onClose={props.onClose} open={props.open} title='System'>
			<Pre />
			<TextArea />
		</Modal>
	)
}