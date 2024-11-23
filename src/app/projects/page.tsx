'use client'

import { filter, sortBy } from 'lodash'
import { useState } from 'react'
import Flex from '@/components/Flex'
import Input from '@/components/Input'
import ListItem from './ListItem'
import projects from '@/content/projects/projects'
import TagFilterControl from './TagFilterControl'
import ArchivedControl from './ArchivedControl'

export default function Projects () {
	const [tag, onSelect] = useState<string>('')

	const items = filter(projects, tag ? item => item.tags.includes(tag) : () => true)
	
	return (
		<>
			<header>
				<Flex>
					<h2>Projects</h2>
					<Flex>
						<ArchivedControl />
						<Input placeholder='Filter' />
						<TagFilterControl onSelect={onSelect} />
					</Flex>
				</Flex>
			</header>
			<br />
			<Flex vertical>
				{sortBy(items, 'title').map(ListItem)}
			</Flex>
		</>
	)
}