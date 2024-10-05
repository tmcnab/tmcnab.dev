'use client'

import { Terminal } from "react-feather"
import { useState } from "react"
import Button from "../Button"
import TerminalModal from "./TerminalModal"

export default function TerminalButton() {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<>
			<Button children={<Terminal />} disabled onClick={() => setOpen(true)} />
			<TerminalModal onClose={() => setOpen(false)} open={open} />
		</>
	)
}