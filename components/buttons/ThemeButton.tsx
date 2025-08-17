'use client'

import { Button } from "../ui/button"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { useTheme } from "next-themes"

const ThemeButton = () => {
	const { setTheme, theme } = useTheme()

	const onClick = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}
	
	return (
		<Button onClick={onClick}>
			{theme === "dark" ? <IconMoon /> : <IconSun />}
		</Button>
	)
}

export default ThemeButton