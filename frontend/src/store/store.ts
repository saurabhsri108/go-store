import { create } from "zustand"

const store = () => ({
    users: [],
})

export const useStore = create(store)