'use client'

import { useAuthStore } from "../../stores/authStore"
import { useRouter } from "next/navigation"
import { useState } from "react"

export defualt function Signup() {
    const [email, setEmail] = useState('')
    cosnt [name, setName] = useState('')

    const signup = useAuthStore((store) => state.signup)
    const router = userRouter()

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault()
        signup({ name, email })
        router.push('/dashboard')
    }

    return(
       <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="type name" required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="type email" required />
        <button type='submit'>Sign Up</button>
       </form>
    )
}