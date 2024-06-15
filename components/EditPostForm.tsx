import { handleEditPost } from '@/data/actions'
import { getPostById } from '@/data/data'
import { redirect } from 'next/navigation'

export async function EditPostForm({ id }: { id: string }) {
	const post = await getPostById(id)

	if (!post) {
		redirect('/blog')
	}

	return (
		<form className='flex flex-col gap-2 mt-6' action={handleEditPost}>
			<label htmlFor='title'>Enter title:</label>
			<input
				type='text'
				className='w-full p-2 border border-gray-300 rounded-md'
				name='title'
				defaultValue={post.title}
			/>
			<label htmlFor='body' className='mt-4'>
				Enter post text:
			</label>
			<textarea
				className='w-full p-2 border border-gray-300 rounded-md resize-none'
				name='body'
				defaultValue={post.body}
			/>
			<input
				type='submit'
				value='Edit'
				className='text-white bg-yellow-500 px-6 py-2 mt-6 block w-fit rounded-md hover:bg-yellow-600 cursor-pointer'
			/>

			<input type='hidden' value={id} name='id' />
		</form>
	)
}
