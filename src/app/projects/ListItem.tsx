import { Project } from "@/types/Project"
import Tag from "@/components/Tag"

export default function ListItem (props: Project) {
	return (
		<li key={props.title.split(' ').join('-')}>
			<header style={{ margin: 0, paddingLeft: 0, paddingRight: 0 }}>
				<h2><a href={`/projects/todo/`}>{props.title}</a></h2>
				<br />
				<small>
					{props.tags.map(tag => <Tag key={tag} title={tag} />)}
				</small>
			</header>
			<br />
			<section style={{ paddingBottom: 16 }}>
				<p>{props.description}</p>
			</section>
		</li>
	)
}