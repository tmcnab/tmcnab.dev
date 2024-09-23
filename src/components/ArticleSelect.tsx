'use client'

import { ChangeEventHandler } from "react"
import { useRouter } from "next/navigation"

export default function ArticleSelect () {
	const router = useRouter()

	const onChange: ChangeEventHandler<HTMLSelectElement> = (event) =>
		router.push(event.target.value)

	return (
		<select onChange={onChange}>
			<option>articles</option>
		</select>
	)
}