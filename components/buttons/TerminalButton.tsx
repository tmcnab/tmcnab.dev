'use client'

import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { IconTerminal2 } from "@tabler/icons-react"

// https://github.com/bony2023/react-terminal
const TerminalButton = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='cursor-pointer' variant='ghost'>
					<IconTerminal2 />
				</Button>
			</DialogTrigger>
			<DialogContent showCloseButton={false} style={{ height: '50vh', padding: 0, width: '50vw' }}>
				<p>Hello World</p>
			</DialogContent>
		</Dialog>
	)
}

export default TerminalButton