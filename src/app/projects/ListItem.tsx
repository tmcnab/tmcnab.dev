import { Project } from "@/types/Project"
import Flex from "@/components/Flex"
import TagList from "@/components/TagList"

export default function ListItem(props: Project) {
	return (
		<li key={props.title.split(' ').join('-')} style={{ marginBottom: '1rem' }}>
			<header style={{ margin: 0, paddingLeft: 0, paddingRight: 0 }}>
				<Flex>
					<h3><a href={`/projects/todo/`}>{props.title}</a></h3>
					<TagList tags={props.tags} />
				</Flex>
			</header>
			<section style={{ paddingBottom: 16 }}>
				<p>{props.description}</p>
			</section>
		</li>
	)
}