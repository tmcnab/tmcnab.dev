import { Project } from "@/types/Project"

export default function ListItem (props: Project) {
	return (
		<li>
			<header style={{ margin: 0, paddingLeft: 0, paddingRight: 0 }}>
				<h2><a href={`/projects/todo/`}>{props.title}</a></h2>
			</header>
			<section style={{ paddingBottom: 16 }}>
				<p>{props.description}</p>
			</section>
		</li>
	)
}