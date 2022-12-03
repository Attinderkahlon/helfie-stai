import { ReactNode } from 'react'

export type ChatWrapperProps = {
  children: ReactNode
}

export default function ChatWrapper({ children }: ChatWrapperProps) {
  return <div className="grid gap-4">{children}</div>
}
