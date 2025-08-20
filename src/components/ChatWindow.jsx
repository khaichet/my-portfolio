// src/components/Chat/ChatWindow.jsx
import React, { useState, useRef, useEffect } from 'react'
import MessageBubble from './MessageBubble'

const GOOGLE_API_KEY = 'AIzaSyASxN3--1n3Aw0c2Ttf9L-2pI96Y-IDxWI'
const GEMINI_MODEL = 'gemini-1.5-flash'

const ChatWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

 const scrollToBottom = () => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
}

useEffect(() => {
  scrollToBottom()
}, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Thêm message của user
    setMessages((prev) => [...prev, { text: input, sender: 'user' }])
    setInput('')
    setIsLoading(true)

    // Thêm message tạm của AI
    const tempAIIndex = messages.length + 1
    setMessages((prev) => [...prev, { text: '', sender: 'ai', isTemp: true }])

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GOOGLE_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      )

      const data = await response.json()
      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text || 'AI chưa trả lời gì.'

      // Cập nhật message tạm bằng response thật
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === tempAIIndex ? { ...msg, text: aiResponse, isTemp: false } : msg
        )
      )
    } catch (error) {
      console.error(error)
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === tempAIIndex
            ? { ...msg, text: 'Xin lỗi, có lỗi xảy ra.', isTemp: false }
            : msg
        )
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-md h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold text-lg">Trò chuyện với AI</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close chat"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <MessageBubble
            key={idx}
            text={msg.text}
            sender={msg.sender}
            isTemp={msg.isTemp}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg text-white ${
              isLoading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatWindow
