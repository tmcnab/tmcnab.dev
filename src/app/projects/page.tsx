import ListItem from './ListItem'
import projects from '@/content/projects/projects'
import { sortBy } from 'lodash'

export default function Projects () {
	return (
		<ul style={{ listStyle: 'none' }}>
			{ sortBy(projects, 'title').map(ListItem)}
		</ul>
	)
}