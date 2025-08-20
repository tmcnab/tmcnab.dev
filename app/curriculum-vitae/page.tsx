import { cloverleaf, degree, griffith, monetate, startups, tripleseat } from './data'
import { ExperienceCard } from './ExperienceCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Curriculum Vitae • tmcnab',
}

const history = [
	cloverleaf,
	tripleseat,
	monetate,
	startups,
	griffith,
	degree,
]

const Page = () =>
	<>
		<h1>Curriculum Vitae</h1>
		<div className='flex flex-col gap-2'>
		{history.map(experience =>
			<ExperienceCard experience={experience} key={experience.id} />
		)}
		</div>
	</>


export default Page