
'use client'

import { useAuthStore } from '../../stores/authStore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const login = useAuthStore((state) => state.login)
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        login({ name, email })
        router.push('/dashboard')
    }

    return(
       <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-bold">Login</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
    </form>
    )

}