import { Button } from "../ui/button"
import { IconBrandLinkedin } from "@tabler/icons-react"
import Link from "next/link"

const LinkedInButton = () => {
	return (
		<Button asChild variant='ghost'>
			<Link href='https://www.linkedin.com/in/tmcnab/' target='_blank' rel='noopener noreferrer'>
				<IconBrandLinkedin />
			</Link>
		</Button>
	)
}

export default LinkedInButton