import { Project } from "@/types/Project"
import Flex from "@/components/Flex"
import Link from "@/components/Link"
import TagList from "@/components/TagList"

export interface ListItemProps {
	description: string
	slug?: string,
	tags: string[]
	title: string,
}

export default function ListItem(props: Project) {
	const href = props.slug ? `/projects/${props.slug}/` : ''

	return (
		<>
			<header>
				<Flex>
					<h3>
						<Link href={href} label={props.title} />
					</h3>
					<TagList tags={props.tags} />
				</Flex>
			</header>
			<section>
				<p>{props.description}</p>
			</section>
		</>
	)
}