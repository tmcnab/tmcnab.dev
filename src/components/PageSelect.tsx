'use client'

import { useRouter } from "next/navigation"
import { ChangeEventHandler } from "react"

export default function PageSelect () {
	const router = useRouter()

	const onChange: ChangeEventHandler<HTMLSelectElement> = (event) =>
		router.push(event.target.value)

	console.log(router)

	return (
		<select onChange={onChange}>
			<option children='index' value='/' />
			<option children='about' value='/about' />
			<option children='projects' value='/projects' />
		</select>
	)
}