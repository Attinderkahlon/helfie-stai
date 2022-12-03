import { useState } from 'react'

import Modal from './pages/Modal'
import Nav from './pages/Nav'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Nav toggle={toggle} />
      {!isOpen ? (
        <div
          className="fixed font-semibold text-blue-500 bottom-0 h-16 w-full border rounded-t-xl bg-white flex items-center justify-center"
          onClick={toggle}
        >
          <span>Check Now</span>
        </div>
      ) : (
        <Modal />
      )}
    </>
  )
}

export default App
