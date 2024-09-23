'use client'

import { ChangeEventHandler } from "react"
import { useRouter } from "next/navigation"

export default function PageSelect () {
	const router = useRouter()

	const onChange: ChangeEventHandler<HTMLSelectElement> = (event) =>
		router.push(event.target.value)

	console.log(router)

	return (
		<select onChange={onChange}>
			<option>pages</option>
			<option children='index' value='/' />
			<option children='about' value='/about' />
			<option children='projects' value='/projects' />
		</select>
	)
}