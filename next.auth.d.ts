import NextAuth, {DefalutSession} from 'next-auth'

declare module 'next-auth' {
	interface Session {
		firebaseToken?: string
		user: {
			id: string
		} & DefalutSession['user']
	}
}
