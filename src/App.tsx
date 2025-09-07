import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ChatPage from './pages/ChatPage'
import { Toaster } from './components/ui/sonner'

function App() {
  console.log('App component loaded')
  
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App