export default class Terminal
{
	private inputs: Array<string> = new Array(0)
	private buffer: Array<string> = new Array(0)

	get history () {
		return [...this.inputs]
	}

	get output () {
		const bLen = this.buffer.length
		const size = 80 * 24
		if (bLen < size) {
			return this.buffer.join().padEnd(size - bLen, ' ')
		} else {
			return this.buffer.slice(bLen - size - 1, bLen - 1).join('')
		}
	}

	enqueue (value: string) {
		this.inputs.push(value)
		value.split('').forEach(value => {
			this.buffer.push(value)
		})
	}
}