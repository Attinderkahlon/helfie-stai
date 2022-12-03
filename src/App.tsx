import { useState } from 'react'
import Chat from './pages/Chat'

import Nav from './pages/Nav'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Nav />
      {!isOpen ? (
        <div
          className='fixed font-semibold text-blue-500 bottom-0 h-16 w-full border rounded-t-xl bg-white flex items-center justify-center'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Check Now</span>
        </div>
      ) : (
        <Chat />
      )}
    </>
  )
}

export default App
