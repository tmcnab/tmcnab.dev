'use client'

import { ReactNode } from "react"
import Flex from "./Flex"

export interface ButtonProps {
	children?: ReactNode
	disabled?: boolean
	onClick?: () => void
	icon?: ReactNode
}

export default function Button (props: ButtonProps) {
	const children = (
		<Flex>
			{props.icon}
			{props.children}
		</Flex>
	)

	return <button children={children} disabled={props.disabled} onClick={props.onClick} />
}