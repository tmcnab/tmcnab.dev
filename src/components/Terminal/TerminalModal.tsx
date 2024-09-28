import Modal from "../Modal/Modal"

export interface TerminalModalProps {
	onClose: () => void
	open: boolean
}

export default function TerminalModal(props: TerminalModalProps) {
	return (
		<Modal onClose={props.onClose} open={props.open} title='System'>
			<pre style={{  height: '24ch', width: '80ch' }} />
			<input autoFocus style={{ border: 'none', width: '80ch' }} value={'> '} />
		</Modal>
	)
}