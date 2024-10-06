import Flex from '@/components/Flex'
import ListItem from './ListItem'
import projects from '@/content/projects/projects'

export default function Projects () {
	return (
		<>
			<header>
				<Flex>
					<input placeholder='Search' />
					<div>
						<button>date</button>
					</div>
				</Flex>
			</header>
			<ul style={{ listStyle: 'none' }}>
				{projects.map(ListItem)}
			</ul>
		</>
	)
}