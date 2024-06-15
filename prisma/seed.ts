import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const initialPosts = [
	{
		title: 'NEXT 14 is coming!!!',
		body: "Get the newest features. Don't miss out on the latest updates and improvements. Mark your calendars for the biggest event of the year! It's going to be a wild ride, so buckle up and get ready for the future of web development!",
	},
	{
		title: 'Prisma is awesome!',
		body: "Learn how to use it with Next.js to build fast, scalable, and secure applications. Take your development skills to the next level with Prisma's powerful ORM. With Prisma, you can focus on building amazing applications without worrying about the underlying database complexity.",
	},
	{
		title: 'New blog post!',
		body: "Check out our latest article on full-stack development with Next.js and Prisma. Learn how to build a real-world application from scratch and deploy it to production. From setting up the project to deploying it to a cloud platform, we've got you covered.",
	},
	{
		title: "What's new in Next.js?",
		body: "Stay up-to-date with the latest features and updates in Next.js. From server-side rendering to static site generation, learn how to take advantage of the latest advancements in the framework. Whether you're a seasoned developer or just starting out, Next.js has something for everyone.",
	},
	{
		title: 'Full-stack development made easy',
		body: "Learn how to build fast and scalable applications with Next.js and Prisma. From backend API development to frontend UI design, get the skills you need to become a full-stack developer. With our tutorials and guides, you'll be building amazing applications in no time.",
	},
	{
		title: 'FILE:BBundefined',
		body: "$#$ undefined $#$ much more... Explore the unknown and discover new possibilities in the world of web development. From the weird to the wonderful, we've got it all covered.",
	},
	{
		title: 'The future of web development',
		body: 'Get ready for the next generation of web applications. With Next.js and Prisma, you can build fast, scalable, and secure applications that will change the world. From AI-powered chatbots to virtual reality experiences, the possibilities are endless.',
	},
	{
		title: 'Unlock your potential',
		body: "Take your development skills to the next level with our tutorials and guides. From beginner to advanced, we've got something for everyone. Learn how to build amazing applications and unlock your full potential as a developer.",
	},
	{
		title: 'The power of Prisma',
		body: 'Discover the power of Prisma and how it can revolutionize your development workflow. With Prisma, you can build fast, scalable, and secure applications with ease. Say goodbye to database complexity and hello to a world of possibilities.',
	},
	{
		title: 'Next.js for beginners',
		body: "Get started with Next.js and learn how to build fast, scalable, and secure applications. From setting up the project to deploying it to production, we've got you covered. Learn how to build amazing applications with Next.js.",
	},
]

const seed = async () => {
	await prisma.post.deleteMany()

	for (const post of initialPosts) {
		await prisma.post.create({ data: post })
	}
}

seed()
