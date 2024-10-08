import { sortBy } from 'lodash'
import ListItem from './ListItem'
import projects from '@/content/projects/projects'

export default function Projects () {
	return (
		<ul style={{ listStyle: 'none' }}>
			{ sortBy(projects, 'title').map(ListItem)}
		</ul>
	)
}