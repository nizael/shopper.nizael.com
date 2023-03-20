import { create } from "zustand"

interface UseLayoutStore {
  activatedPage: string,
  setActivatedPage(page: string): void
}

export const useLayoutStore = create<UseLayoutStore>((set, get) => (
  {
    activatedPage: '',
    setActivatedPage: (page) => set({ activatedPage: page })
  }
))

