import { Project } from "@/types/Project"
import Flex from "@/components/Flex"
import TagList from "@/components/TagList"
import Link from "@/components/Link"

export default function ListItem(props: Project) {
	const key = props.title.split(' ').join('-')

	return (
		<li key={key} style={{ marginBottom: '1rem' }}>
			<header>
				<Flex>
					<h3>
						<Link label={props.title} href={props.slug ? `/projects/${props.slug}/` : undefined} />
					</h3>
					<TagList tags={props.tags} />
				</Flex>
			</header>
			<section style={{ paddingBottom: 16, paddingTop: 16 }}>
				<p>{props.description}</p>
			</section>
		</li>
	)
}