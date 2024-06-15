import { BlogItem } from '@/components/BlogItem'
import { getPosts } from '@/data/data'
import Link from 'next/link'

export default async function BlogPage() {
	const posts = await getPosts()

	return (
		<main className='container m-auto'>
			<h1 className='text-xl text-center mt-6'>Welcome to blog page!</h1>
			{posts.map(post => (
				<BlogItem key={post.id} {...post} />
			))}
			<Link
				href={'/blog/add'}
				className='text-white bg-green-500 px-6 py-2 mt-6 block w-fit rounded-md hover:bg-green-600'
			>
				Add new post
			</Link>
		</main>
	)
}
