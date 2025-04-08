
import { create } from 'zustand'

type User = {
    name: string
    email: string
}

type AuthState = {
    user: User | null
    isAuthenticated: boolean
    login: ( user: User ) => void
    logout: () => void
    signup: ( user: User ) => void
}


export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,

    login: (user) => set({ user, isAuthenticated: true }),
    
    signup: (user) => set({ user, isAuthenticated: true }),

    logout: () => set({ user: null, isAuthenticated: true })
}))