'use client'

import { ChangeEventHandler } from "react"
import { useRouter } from "next/navigation"

export default function PageSelect () {
	const router = useRouter()

	const onChange: ChangeEventHandler<HTMLSelectElement> = (event) =>
		router.push(event.target.value)

	return (
		<select onChange={onChange}>
			<option children='index' value='/' />
			<option children='about' value='/about' />
			<option children='projects' value='/projects' />
		</select>
	)
}