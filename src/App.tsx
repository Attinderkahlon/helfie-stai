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
        <div className='flex flex-col bg-gray-200 justify-center items-center h-screen  '>
          <div
            className='absolute inset-x-0 bottom-0 h-16 rounded-t-3xl border-8 border-x-blue-600  border-t-blue-600 container hover:bg-slate-500 text-dark font-bold py-2 px-4 m-2 w-auto'
            onClick={toggle}
          >
            Check Now
          </div>
        </div>
      ) : (
        <Modal />
      )}
    </>
  )
}

export default App
