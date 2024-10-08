// import default as colorHash from 'color-hash'

export interface TagProps {
	title: string
}

export default function Tag (props: TagProps) {
	// const color = colorHash.hex(props.title)
	const color = '#777777'
	return <span style={{ border: `1px solid ${color}`, borderRadius: '0.25rem', color, fontSize: 'small', marginRight: '0.25rem', padding: '0.25rem' }}>{props.title}</span>
}