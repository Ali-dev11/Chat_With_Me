import {getServerSession} from 'next-auth'
import DarkModeToggle from './DarkModeToggle'
import Logo from './Logo'
import UserButton from './UserButton'
import {authOptions} from '@/auth'
import Link from 'next/link'
import {MessageSquareIcon} from 'lucide-react'

const Header = async () => {
	const session = await getServerSession(authOptions)
	return (
		<header className='sticky top-8 z-50 bg-white dark:bg-gray-900'>
			<nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-800 max-w-7xl mx-auto'>
				<Logo />
				<div className='flex-1 flex items-center justify-end space-x-4'>
					{/* langauage banner */}

					{session ? (
						<>
							<Link
								href={'/chat'}
								prefetch={false}>
								<MessageSquareIcon className='text-black dark:text-white' />
							</Link>
						</>
					) : (
						<Link href='/pricing'>Pricing</Link>
					)}
					<DarkModeToggle />
					<UserButton session={session} />
				</div>
			</nav>
			{/* upgrade banner */}
		</header>
	)
}

export default Header
