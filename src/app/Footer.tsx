import Flex from "@/components/Flex"
import TerminalButton from "@/components/Terminal/TerminalButton"
import ThemeButton from "@/components/ThemeButton"

export default function Footer() {
	return (
		<footer style={{ paddingTop: '1rem' }}>
			<Flex>
				<TerminalButton />
				<ThemeButton />
			</Flex>
		</footer>
	)
}