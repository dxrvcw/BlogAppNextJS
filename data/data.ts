import { prisma } from '@/lib/prisma'

export async function getPosts() {
	const posts = prisma?.post.findMany()
	return posts
}

export async function getPostById(id: string) {
	const post = prisma?.post.findUnique({
		where: {
			id,
		},
	})
	return post
}
