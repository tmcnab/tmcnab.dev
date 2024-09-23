'use client'

import { ReactNode } from "react"

export interface ButtonProps {
	children: ReactNode
}

export default function Button (props: ButtonProps) {
	return <button children={props.children} />
}