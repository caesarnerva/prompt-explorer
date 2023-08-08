'use client'
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

export default function Guides() {

  const [isLoading, setIsLoading] = useState(true)
  const [links, setLinks] = useState([])

  useEffect(() => {
    const fetchGuides = async () => {
      // Setting up request
      const supabaseUrl = 'https://hagundjkclrmumihxyos.supabase.co'
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      const supabase = createClient(supabaseUrl, supabaseKey)

      // Main request
      const { data } = await supabase.from('guides').select('*')
      
      // Setting state
      setLinks(data)
      setIsLoading(false)
    }

    fetchGuides()

  },[])

  if (isLoading) {return <p>Loading...</p>}

  return (
    <main>
      <h1>Guides</h1>
      <section className="lg:columns-4 md:columns-2">
        {links.map((link) => <p key={link.id}>{link.link}</p>)}
      </section>
    </main>
  )
}