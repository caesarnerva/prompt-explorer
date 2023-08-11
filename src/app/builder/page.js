'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Build() {

  const [persona, setPersona] = useState('#persona')
  const [topic, setTopic] = useState('#topic')
  const [entities, setEntities] = useState([])
  const [isSpecificPerson, setIsSpecificPerson] = useState(false)

  let promptOpeners = [
    `I want you to act like a ${persona}.`, `Pretend you're a ${persona}.`
  ]
  let promptBodies = [
    `Explain how ${topic} works using your expertise or from your point of view.`, `Compare ${entities[0]} with ${entities[1]}.`
  ]
  let promptInstruction = [
    `Please go into full detail.`, `Assume I already know the basics, and skip the introductory information.`
  ]
  return (
    <main>
      <h1>builder</h1>
      <div className='text-zinc-500 text-sm'>Opener</div>
      {
        promptOpeners.map((opener) =>
          <p>{opener}</p>
        )
      }
      <div className='text-zinc-500 text-sm'>Body</div>
      {
        promptBodies.map((body) =>
          <p>{body}</p>
        )
      }
      <div className='text-zinc-500 text-sm'>Instructions</div>
      {
        promptInstruction.map((instruction) =>
          <p>{instruction}</p>
        )
      }
    </main>
  )
}
