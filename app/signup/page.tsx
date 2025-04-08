'use client'

import { useAuthStore } from "@/stores/authStore"
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
       <form>
        <h2>Sign Up</h2>
       </form>
    )
}