'use client'

import { ReactNode } from "react"

export interface ButtonProps {
	children?: ReactNode
	onClick?: () => void
	icon?: ReactNode
}

export default function Button (props: ButtonProps) {
	const children = []

	if (props.icon) children.push(props.icon)
	if (props.children) children.push(props.children)

	return <button children={children} onClick={props.onClick} />
}