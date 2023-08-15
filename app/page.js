'use client'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const fetchGuides = async () => {

      const res = await fetch(`api/prompt`)
      const data = await res.json()
      console.log(data)
    }
    fetchGuides()
  })
  return (
    <main>
      <h1>Prompt Explorer</h1>
      <p>Discover prompt best practices</p>
      <p>Build your own prompts from 100+ templates</p>
    </main>
  )
}
