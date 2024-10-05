'use client'

import { Sun } from "react-feather"
import Button from "./Button"
import Flex from "./Flex"

export default function ThemeButton () {
	const children = (
		<Flex>
			<Sun />
			{/* <Moon /> */}
		</Flex>
	)

	const onClick = () =>
		console.log('toggle theme')
	
	return (
		<Button children={children} disabled onClick={onClick} />
	)
}