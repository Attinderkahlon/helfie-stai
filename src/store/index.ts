import create from 'zustand'

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
