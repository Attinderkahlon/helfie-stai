import { ReactNode } from 'react'
import { AiFillRobot } from 'react-icons/ai'
import { RiSpyLine } from 'react-icons/ri'

export type ChatContainerProps = {
  children: ReactNode
  type?: 'question' | 'answer'
}

export default function ChatContainer({
  children,
  type = 'question',
}: ChatContainerProps) {
  return (
    <div
      className={`relative grid w-5/6 p-2 text-xl animate-fade-in-down ${
        type === 'question'
          ? 'bg-slate-300 rounded-r-md rounded-bl-md'
          : 'bg-blue-600 ml-auto rounded-l-md rounded-br-md'
      }`}
    >
      {type === 'question' ? (
        <AiFillRobot size="26px" className="p-0.5 text-gray-900" />
      ) : (
        <RiSpyLine
          size="26px"
          className="bg-white bg-opacity-50 rounded-full p-0.5 text-gray-900"
        />
      )}
      <div
        className={`py-3 ${
          type === 'question' ? 'text-gray-900' : 'text-white'
        }`}
      >
        {children}
      </div>

      <div
        className={`absolute h-2 w-2 ${
          type === 'question'
            ? '-left-1.5 bg-slate-300'
            : '-right-1.5 bg-blue-600'
        }`}
      ></div>
    </div>
  )
}
