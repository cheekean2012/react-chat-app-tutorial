import React from 'react'

const Message = () =>{
    return (
      <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="./bg.png" alt="user avatar" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is upp?</div>
        <div className='flex items-center gap-1 text-xs opacity-50 chat-footer'>12:42</div>
      </div>
    )
}

export default Message
