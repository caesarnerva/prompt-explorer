"use client"
import Link from 'next/link'
import { usePathname} from 'next/navigation';

export default function Sidebar() {

  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 py-4 px-4 border-r-2 border-zinc-900">
      <Link href='/builder/career-advice' className={pathname == `/builder/career-advice` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-lg font-bold'>Learn a Discipline</h3>
        <p>Prod GPT4 to go deep on topics.</p>
      </Link>
      <Link href='/builder/historical-figures' className={pathname == `/builder/historical-figures` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-lg font-bold'>Chat with Historical Figures</h3>
        <p>Coax the AI into representing real people.</p>
      </Link>
      <Link href='/builder/time-travel' className={pathname == `/builder/time-travel` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-lg font-bold'>Role Play</h3>
        <p>Travel back in time or create your own world.</p>
      </Link>
      <Link href='/builder/research' className={pathname == `/builder/research` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-lg font-bold'>Research</h3>
        <p>Craft detailed, topical questions.</p>
      </Link>
      <Link href='/builder/create-original-text' className={pathname == `/builder/create-original-text` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-lg font-bold'>Create Original Text</h3>
        <p>Use the AI as your own ghost writer.</p>
      </Link>
    </div>
  )
}