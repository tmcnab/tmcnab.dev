import { ReactNode } from "react";

export interface LinkProps {
	href: string
	icon?: ReactNode
	label: string
}

export default function Link (props: LinkProps) {
	return (
		<a href={props.href}>
			{props.icon} {props.label}
		</a>
	)
}