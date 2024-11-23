'use client'

import { ChangeEventHandler, useEffect, useState } from 'react'
import { uniq } from 'lodash'
import projects from '@/content/projects/projects'

const allTags = uniq(projects.reduce<string[]>((tags, proj) => {
	return tags.concat(proj.tags)
}, [] as string[]).sort())

export interface TagSelectProps {
	onSelect: (tag: string) => void
}

export default function TagSelect (props: TagSelectProps) {
	const [value, setValue] = useState<string>('')
	
	const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		setValue(event.target.value)
	}

	useEffect(() => {
		props.onSelect(value)
	}, [value])

	return (
		<select onChange={onChange} value={value}>
			<option value=''>All Tags</option>
			{allTags.map(tag => <option key={tag}>{tag}</option>)}
		</select>
	)
}