'use client'

import { ReactNode } from "react"

export interface ButtonProps {
	children: ReactNode
	onClick: () => void
}

export default function Button (props: ButtonProps) {
	return <button children={props.children} onClick={props.onClick} />
}