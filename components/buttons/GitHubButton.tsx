import Link from "next/link"
import { Button } from "../ui/button"
import { IconBrandGithub } from "@tabler/icons-react"

const GitHubButton = () => {
	return (
		<Button asChild variant='ghost'>
			<Link href='https://github.com/tmcnab' target='_blank' rel='noopener noreferrer'>
				<IconBrandGithub />
			</Link>
		</Button>
	)
}

export default GitHubButton