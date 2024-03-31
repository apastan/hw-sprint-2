import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
type User = {
    avatar: string
    name: string
}

export type MessageType = {
    id: number
    user: User
    message: {
        text: string
        time: string
    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Ivan',  // можно менять
    },
    message: {
        text: 'Hello there!', // можно менять
        time: '08:56', // можно менять
    },
}

export const message1: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Ivan',  // можно менять
    },
    message: {
        text: 'Did you hear news?', // можно менять
        time: '22:03', // можно менять
    },
}

export const message2: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Ivan',  // можно менять
    },
    message: {
        text: `She didn't do anything and rested all day! I can't believe that is true... May be it's just rumors?`, // можно менять
        time: '22:03', // можно менять
    },
}

export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Brad', // можно менять
    },
    message: {
        text: "Hello?", // можно менять
        time: '22:02', // можно менять
    },
}

export const friendMessage1: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Brad', // можно менять
    },
    message: {
        text: "In fact, I don't know", // можно менять
        time: '22:43', // можно менять
    },
}

export const friendMessage2: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Brad', // можно менять
    },
    message: {
        text: 'Hello, how are you, what did you do yesterday? Hello, how are you, what did you do yesterday? Hello, how are you, what did you do yesterday? Hello, how are you, what did you do yesterday?', // можно менять
        time: '08:43', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                    <Message message={message1} />
                    <Message message={message2} />
                    <FriendMessage message={friendMessage1} />
                    <FriendMessage message={friendMessage2} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
