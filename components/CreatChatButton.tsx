'use client'

import {MessageSquarePlusIcon} from 'lucide-react'

import {Button} from './ui/button'
import {useRouter} from 'next/navigation'

const CreatChatButton = () => {
	const router = useRouter()

	const createNewChat = () => {
		//TODO
		router.push(`/chat/abc`)
	}

	return (
		<Button
			onClick={createNewChat}
			variant={'ghost'}>
			<MessageSquarePlusIcon />
		</Button>
	)
}

export default CreatChatButton
