import Link from 'next/link'

interface IBlogItemProps {
	id: string
	title: string
	body: string
}

export function BlogItem({ id, title, body }: IBlogItemProps) {
	return (
		<Link
			href={`/blog/${id}`}
			className='w-full py-2 px-6 border-solid border-black border-2 mt-4 block rounded-md hover:bg-slate-200'
		>
			{title}
		</Link>
	)
}
