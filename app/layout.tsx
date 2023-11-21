import type {Metadata} from 'next'
import Header from '@/components/Header'

import './globals.css'
import {ThemeProvider} from '@/components/ThemeProvider'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<ClientProviders>
			<html lang='en'>
				<body className='flex flex-col min-h-screen'>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						<Header />
					</ThemeProvider>
					{children}
				</body>
			</html>
		</ClientProviders>
	)
}
