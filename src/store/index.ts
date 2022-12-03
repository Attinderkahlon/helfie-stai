import create from 'zustand'
import Loader from '../assets/Loader'
import { useState, useEffect } from 'react'

import { MaleData } from '../types/male'

type MaleState = {
  maleData: MaleData
  setMaleData: (data: MaleData) => void
}

export const useMaleStore = create<MaleState>((set) => ({
  maleData: {},
  setMaleData: (data) =>
    set((state) => ({ maleData: { ...state.maleData, ...data } })),
}))

export const useLoaderStore = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return { loading, setLoading }
}
