'use client'

import { Button } from "../ui/button"
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from "next-themes"

const ThemeButton = () => {
	const { setTheme, theme } = useTheme()

	const icon = theme === 'dark'
		? <MoonIcon />
		: <SunIcon />

	const onClick = () =>
		setTheme(theme === "dark" ? "light" : "dark")
	
	return (
		<Button className='cursor-pointer' onClick={onClick} variant='ghost'>
			{icon}
		</Button>
	)
}

export default ThemeButton