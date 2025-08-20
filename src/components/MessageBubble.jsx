// src/components/Chat/MessageBubble.jsx
import React from 'react'

const MessageBubble = ({ text, sender, isTemp }) => {
  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'
        }`}
      >
        {isTemp ? (
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
          </div>
        ) : (
          <div className="whitespace-pre-wrap break-words">{text}</div>
        )}
      </div>
    </div>
  )
}

export default MessageBubble
