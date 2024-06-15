// TODO: Add fetching from database

import { handleDeletePost } from '@/data/actions'
import { getPostById } from '@/data/data'
import Link from 'next/link'

interface IPostPageProps {
	params: {
		id: string
	}
}

export default async function PostPage({ params }: IPostPageProps) {
	const post = await getPostById(params.id)

	if (!post) {
		return (
			<main className='container m-auto'>
				<h1 className='text-center text-xl mt-6'>Post not found</h1>
			</main>
		)
	}

	return (
		<main className='container m-auto'>
			<h1 className='text-center text-xl mt-6'>{post.title}</h1>
			<p className='my-4'>{post.body}</p>
			<Link
				href={`/blog/${post.id}/edit`}
				className='bg-yellow-200 px-6 py-2 rounded-md mr-4 hover:bg-yellow-300 w-fit'
			>
				Edit
			</Link>
			<form
				action={handleDeletePost.bind(null, post.id)}
				className=' inline-block'
			>
				<input
					type='submit'
					value='Delete'
					className='bg-red-300 px-6 py-2 rounded-md hover:bg-red-400 cursor-pointer'
				/>
			</form>
		</main>
	)
}
