'use client'

import { Terminal } from "react-feather"
import { useState } from "react"
import Button from "../Button"
import TerminalModal from "./TerminalModal"

export default function TerminalButton () {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<>
			<Button children={<Terminal />} onClick={() => setOpen(true)} />
			<TerminalModal open={open} />
		</>
	)
}