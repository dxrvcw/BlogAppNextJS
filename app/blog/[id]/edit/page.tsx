import { EditPostForm } from '@/components/EditPostForm'

interface IPostEditPageProps {
	params: {
		id: string
	}
}

export default function PostEditPage({ params }: IPostEditPageProps) {
	return (
		<main className='container m-auto'>
			<h1>Edit post</h1>
			<EditPostForm id={params.id} />
		</main>
	)
}
