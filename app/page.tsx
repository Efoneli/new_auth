import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-3xl font-bold">Zustand Auth Demo</h1>
      <Link href="/signup" className="text-blue-600 underline">Sign Up</Link>
      <Link href="/login" className="text-green-600 underline">Login</Link>
    </main>
  )
}
