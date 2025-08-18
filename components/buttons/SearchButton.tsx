import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { IconSearch } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"

const SearchButton = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='cursor-pointer' variant='ghost'>
					<IconSearch />
				</Button>
			</DialogTrigger>
			<DialogContent className='p-0' showCloseButton={false}>
				<form action='/search' method='GET'>
					<Input name='query' placeholder='Search' />
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default SearchButton