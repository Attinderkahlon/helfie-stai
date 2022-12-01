export type NavProps = {
  toggle: () => void
}

export default function Nav({ toggle }: NavProps) {
  return (
    <nav className='bg-blue-600 p-6 flex '>
      <div className='rounded-full bg-blue-800 text-white  text-2xl w-12 h-12 text-center '>
        H
      </div>
      <p className='text-2xl p-2 text-center text-white'> Helfie Assistant</p>
      <p className='text-white text-4xl ml-16 text-end'>-</p>
      <button
        className='text-white text-xl m-2 ml-4 text-center '
        onClick={toggle}
      >
        X
      </button>
    </nav>
  )
}
