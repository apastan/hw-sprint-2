import React from 'react'
import message from '../message/Message.module.css'
import friend from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";


type FriendMessageProps = MessagePropsType

const FriendMessage = (props: FriendMessageProps) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={friend.friendMessage}>
            <div className={friend.friendImageAndText}>
                <div>
                    <div
                        id={'hw1-friend-time-' + props.message.id}
                        className={friend.friendTime}>
                        {props.message.message.time}
                    </div>
                    <img
                        id={'hw1-friend-avatar-' + props.message.id}
                        src={props.message.user.avatar}/>
                </div>
                <div className={friend.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={friend.friendName}>
                        {props.message.user.name}
                    </div>
                    <div
                        id={'hw1-friend-text-' + props.message.id}
                        className={friend.friendMessageText}>
                        {props.message.message.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendMessage
