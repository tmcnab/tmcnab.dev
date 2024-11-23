'use client'

import Button from "@/components/Button"
import { useState } from "react"
import { CheckSquare, Square } from "react-feather"

export default function ArchivedControl () {
	const [checked, setChecked] = useState<boolean>(false)

	const icon = checked ? <CheckSquare /> : <Square />
	
	const onClick = () =>
		setChecked(!checked)

	return (
		<Button icon={icon} onClick={onClick}>
			Archived
		</Button>
	)
}