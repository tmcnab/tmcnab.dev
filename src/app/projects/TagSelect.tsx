import { ChangeEventHandler } from 'react'
import { uniq } from 'lodash'
import projects from '@/content/projects/projects'

const allTags = uniq(projects.reduce<string[]>((tags, proj) => {
	return tags.concat(proj.tags)
}, [] as string[]).sort())

export interface TagSelectProps {
	onSelect: (tag: string) => void
}

export default function TagSelect (props: TagSelectProps) {
	const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => 
		props.onSelect(event.target.value)

	return (
		<select onChange={onChange} value={''}>
			<option value=''>Tags</option>
			{allTags.map(tag => <option key={tag}>{tag}</option>)}
		</select>
	)
}