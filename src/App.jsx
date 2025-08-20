import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ChatButton from './components/ChatButton'
import ChatWindow from './components/ChatWindow'

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div>
      <Home/>
      <ChatButton onClick={() => setIsChatOpen(true)} />
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}

export default App