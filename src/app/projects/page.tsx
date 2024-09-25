import projects from '../../data/projects'

export default function Projects() {
	return (
		<>
			<pre>{JSON.stringify(projects, null, 2)}</pre>
		</>
	)
}