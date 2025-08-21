'use client'

import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { IconTerminal2 } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { ReactTerminal } from 'react-terminal'

// https://github.com/bony2023/react-terminal
const TerminalButton = () => {
	const { theme } = useTheme()
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='cursor-pointer' variant='ghost'>
					<IconTerminal2 />
				</Button>
			</DialogTrigger>
			<DialogContent showCloseButton={false} style={{ height: '25ch', padding: 0, width: '80ch' }}>
				<ReactTerminal
					prompt='tmcnab.dev'
					showControlBar={false}
					theme={`material-${theme}`}
				/>
			</DialogContent>
		</Dialog>
	)
}

export default TerminalButton