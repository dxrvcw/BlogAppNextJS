import Link from 'next/link'

const headerLinks = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Blog',
		link: '/blog',
	},
]

export function Header() {
	return (
		<header className='flex justify-center gap-12 py-6 bg-slate-800'>
			{headerLinks.map(link => (
				<Link
					href={link.link}
					key={link.name}
					className='text-[18px] text-white'
				>
					{link.name}
				</Link>
			))}
		</header>
	)
}
