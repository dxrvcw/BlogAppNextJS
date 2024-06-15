import { handleAddPost } from '@/data/actions'

interface IAddPostFormProps {
	onSuccess?: (id: number) => void
}

export function AddPostForm({ onSuccess }: IAddPostFormProps) {
	return (
		<form className='flex flex-col gap-2 mt-6' action={handleAddPost}>
			<label htmlFor='title'>Enter title:</label>
			<input
				type='text'
				className='w-full p-2 border border-gray-300 rounded-md'
				name='title'
			/>
			<label htmlFor='body' className='mt-4'>
				Enter post text:
			</label>
			<textarea
				className='w-full p-2 border border-gray-300 rounded-md resize-none'
				name='body'
			/>
			<input
				type='submit'
				className='text-white bg-green-500 px-6 py-2 mt-6 block w-fit rounded-md hover:bg-green-600 cursor-pointer'
			/>
		</form>
	)
}
