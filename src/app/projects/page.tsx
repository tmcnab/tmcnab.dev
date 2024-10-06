import ListItem from './ListItem'
import projects from '@/content/projects/projects'

export default function Projects () {
	return (
		<ul style={{ listStyle: 'none' }}>
			{projects.map(ListItem)}
		</ul>
	)
}