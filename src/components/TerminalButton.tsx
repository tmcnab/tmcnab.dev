'use client'

import { Terminal } from "react-feather"
import { useState } from "react"
import Button from "./Button"
import Modal from "./Modal/Modal"

export default function TerminalButton () {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<>
			<Button children={<Terminal />} onClick={() => setOpen(true)} />
			<Modal open={open} title='Terminal' />
		</>
	)
}