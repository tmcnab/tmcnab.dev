import Flex from "./Flex"
import Tag from "./Tag"

export interface TagListProps {
	tags: string[]
}

export default function TagList (props: TagListProps) {
	return (
		<Flex gap={'0.25rem'}>{props.tags.map(tag =>
			<Tag key={tag} title={tag} />)}
		</Flex>
	)
}