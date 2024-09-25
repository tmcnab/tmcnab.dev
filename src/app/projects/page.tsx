import Card from "@/components/Card/Card"
import Cyberdeck from './cyberdeck.mdx'
import Flex from "@/components/Flex"
import Input from "@/components/Input"
import TTAX from './ttax.mdx'

export default function Projects () {
	return (
		<>
			<Flex>
				<Input placeholder='Filter Projects' />
				<select />
			</Flex>
			<Flex>
				<Card title='cyberdeck'>
					<Cyberdeck />
				</Card>
				<Card title='ttax'>
					<TTAX />
				</Card>
				<Card title='mpl'>
					<p>TODO</p>
				</Card>
				<Card title='C12'>
					<p>TODO</p>
				</Card>
			</Flex>
			<Flex>
				<Card title='tsds'>
					<p>TODO</p>
				</Card>
				<Card title='dejima'>
					<p>TODO</p>
				</Card>
				<Card title='kowloon'>
					<p>TODO</p>
				</Card>
				<Card title='voyage'>
					<p>TODO</p>
				</Card>
			</Flex>
			<Flex>
				<Card title='horsemen'>
					<p>TODO</p>
				</Card>
				<Card title='gjf'>
					<p>TODO</p>
				</Card>
				<Card title='aug'>
					<p>TODO</p>
				</Card>
				<Card title='mpl'>
					<p>TODO</p>
				</Card>
			</Flex>
			<Flex>
				<Card title='house-hunter'>
					<p>TODO</p>
				</Card>
				<Card title='mpl'>
					<p>TODO</p>
				</Card>
				<Card title='ultralight'>
					<p>TODO</p>
				</Card>
				<Card title='cenotaph'>
					<p>TODO</p>
				</Card>
				<Card title='muik'>
					<p>TODO</p>
				</Card>
			</Flex>
		</>
	)
}