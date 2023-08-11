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
      <section className="lg:columns-3 md:columns-2">
        {links.map((link) => 
          <a href={link.link} target="_blank">
            <div className='p-2 bg-zinc-900'>
              <p key={link.id}>{link.link}</p>
            </div>
          </a>
        )}
      </section>
    </main>
  )
}