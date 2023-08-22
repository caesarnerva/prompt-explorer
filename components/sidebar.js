"use client"
import Link from 'next/link'
import { usePathname} from 'next/navigation';

export default function Sidebar() {

  const pathname = usePathname();

  return (
    <div className="py-4 px-4 border-r-2 border-zinc-900">
      <div className="segmented-control">Text prompts</div>
      <div className="flex flex-row gap-2">
        <Link href='/builder/research' className={pathname == `/builder/research` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
          <h3 className='text-md font-bold'>Research</h3>
          <p className="text-sm text-zinc-300">Craft detailed, topical questions.</p>
        </Link>
        <Link href='/builder/summarize' className={pathname == `/builder/summarize` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
          <h3 className='text-md font-bold'>Summarize</h3>
          <p className="text-sm text-zinc-300">Ask the AI to simplify a piece of text.</p>
        </Link>
        <Link href='/builder/creative-writing' className={pathname == `/builder/creative-writing` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
          <h3 className='text-md font-bold'>Write</h3>
          <p className="text-sm text-zinc-300">Use the AI as your own ghost writer.</p>
        </Link>
        <Link href='/builder/learn' className={pathname == `/builder/learn` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
          <h3 className='text-md font-bold'>Learn</h3>
          <p className="text-sm text-zinc-300">Prod GPT4 to go deep on topics.</p>
        </Link>
        <Link href='/builder/debate' className={pathname == `/builder/debate` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
          <h3 className='text-md font-bold'>Debate</h3>
          <p className="text-sm text-zinc-300">Use the AI as your own ghost writer.</p>
        </Link>
        <Link href='/builder/historical-figures' className={pathname == `/builder/historical-figures` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
          <h3 className='text-md font-bold'>Converse</h3>
          <p className="text-sm text-zinc-300">Coax the AI into representing real people.</p>
        </Link>
        <Link href='/builder/time-travel' className={pathname == `/builder/time-travel` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
          <h3 className='text-md font-bold'>Role Play</h3>
          <p className="text-sm text-zinc-300">Travel back in time or create your own world.</p>
        </Link>
      </div>
      
    </div>
  )
}