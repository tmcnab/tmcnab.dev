import Flex from "@/components/Flex"

export default function Page() {
	return (
		<Flex gap='1rem'>
			<section style={{ flex: 1 }}>
				<h3>Me</h3>
				<p>I&apos;m Tristan.</p>
				<br />
				<p>Programmer, engineer, husband and socialist. This site catalogues some of my previous, current and future activities.</p>
			</section>
			<section style={{ flex: 1 }}>
				<h3>Articles</h3>
				<p>TODO</p>
			</section>
			<section style={{ flex: 1 }}>
				<h3>Projects</h3>
				<p>TODO</p>
			</section>
		</Flex>
	)
}