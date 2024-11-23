'use client'

import { filter, sortBy } from 'lodash'
import { useState } from 'react'
import Flex from '@/components/Flex'
import Input from '@/components/Input'
import ListItem from './ListItem'
import projects from '@/content/projects/projects'
import TagSelect from './TagSelect'

export default function Projects () {
	const [tag, onSelect] = useState<string>('')
	// const [, onChange] = useState<string>()

	const items = filter(projects, tag ? item => item.tags.includes(tag) : () => true)
	
	return (
		<>
			<header>
				<Flex>
					<h2>Projects</h2>
					<Flex>
						<Input placeholder='Filter' />
						<TagSelect onSelect={onSelect} />
					</Flex>
				</Flex>
			</header>
			<ul style={{ listStyle: 'none', paddingTop: '2rem' }}>
				{sortBy(items, 'title').map(ListItem)}
			</ul>
		</>
	)
}