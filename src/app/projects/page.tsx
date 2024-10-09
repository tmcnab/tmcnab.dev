'use client'

import { sortBy } from 'lodash'
import { useState } from 'react'
import Flex from '@/components/Flex'
import Input from '@/components/Input'
import ListItem from './ListItem'
import projects from '@/content/projects/projects'
import TagSelect from './TagSelect'

export default function Projects () {
	const [selectedTag, onSelect] = useState<string>('')
	const [filter, onChange] = useState<string>()
	
	return (
		<>
			<header>
				<Flex>
					<h2>Projects</h2>
					<Flex>
						<Input onChange={onChange} placeholder='Filter' />
						<TagSelect onSelect={onSelect} />
					</Flex>
				</Flex>
			</header>
			<ul style={{ listStyle: 'none', paddingTop: '2rem' }}>
				{sortBy(projects, 'title').map(ListItem)}
			</ul>
		</>
	)
}