import React, { Component } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () =>{
    const noChatSelected = true;    
    return (
      <div className='md:min-w-[450px] flex flex-col'>
        {noChatSelected ? (
          <NoChatSelected />
        ) : (
          <>
            <div className='px-4 py-2 mb-2 bg-slate-500'>
                <span className='label-text'>To:</span>{" "}
                <span className='font-bold text-gray-900'>John Doe</span>
            </div>

            <Messages />
            <MessageInput />
          </>
        )}
      </div>
    )
}

export default MessageContainer


const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl'>
        <p>Welcome👋 John Doe ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl text-center md:text-6xl'/>
      </div>
    </div>
  )
}