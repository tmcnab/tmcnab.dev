import { Badge } from '@/components/ui/badge'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Experience } from './Experience'

export interface ExperienceCardProps {
	experience: Experience
}

export const ExperienceCard = (props: ExperienceCardProps) => {
	const start = `${props.experience.start.month}/${props.experience.start.year}`
	const end = props.experience.end ? `${props.experience.end.month}/${props.experience.end.year}` : 'Current'

	return (
		<Card>
			<CardHeader>
				<CardTitle>{props.experience.role}</CardTitle>
				<CardAction>
					{props.experience.skills.map((value: string) =>
						<Badge key={value} variant='outline'>
							{value}
						</Badge>
					)}
				</CardAction>
				<CardDescription>
					{props.experience.company} • {props.experience.location} • {`${start} to ${end}`}
				</CardDescription>
			</CardHeader>
			<CardContent>
				{props.experience.description}
			</CardContent>
		</Card>
	)
}