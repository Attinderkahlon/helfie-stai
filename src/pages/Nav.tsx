export type NavProps = {
  toggle: () => void
}

export default function Nav({ toggle }: NavProps) {
  return (
    <nav className="bg-blue-600 z-10 flex fixed top-0 w-full items-center p-3 gap-2 shadow-md">
      <div className="rounded-full bg-blue-800 text-white font-bold text-lg w-9 h-9 text-center flex items-center justify-center">
        H
      </div>
      <p className="text-xl text-white whitespace-nowrap">Helfie Assistant</p>
    </nav>
  )
}
