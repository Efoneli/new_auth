
'use client'

import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const signup = useAuthStore((state) => state.signup)
  const router = useRouter()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    signup({ name, email })
    router.push('/dashboard')
  }

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-4 max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-bold">Sign Up</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
    </form>
  )
}
