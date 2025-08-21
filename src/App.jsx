import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ChatButton from './components/ChatButton'
import ChatWindow from './components/ChatWindow'
import Hero from './components/Hero'
import FeatureSection from './components/Featured'
import FeaturedProjects from './components/FeaturedProjects'
import WorkStyle from './components/WorkStyle'
import ContactSection from './components/ContactSection'

const App = () => { 
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeatureSection/> 
      <FeaturedProjects/>
      <WorkStyle/>
      <ChatButton onClick={() => setIsChatOpen(true)} />
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}

export default App