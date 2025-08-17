import type { Metadata } from 'next'

export const metadata: Metadata = {
	description: 'TODO',
	title: 'R150 • tmcnab.dev',
}

const Page = () => {
	return (
		<article>
			<header>
				<h1>R150</h1>
			</header>
			<section>
				<p>R150 is a 150mm<sup>3</sup>–sized robot with four wheels and a heart of gold. Its purpose is to serve as a testbench for emergent technologies and be adorable.</p>
			</section>
		</article>
	)
}

export default Page