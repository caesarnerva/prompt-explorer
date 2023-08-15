"use client"
import Link from 'next/link'
import { usePathname} from 'next/navigation';

export default function TopNav() {

  const pathname = usePathname();

  const builderTabString = '/builder'
  const guidesTabString = '/guides'

  return (
    <header className="flex items-center gap-8 py-2 px-6 border-b-2 border-zinc-900">
      <h2 className="font-semibold">Prompt Explorer</h2>
      <button className="bg-sky-500/20 hover:bg-sky-500/50 rounded-full py-2 px-4"><a href="https://buy.stripe.com/6oEg0d9PM3tHepW4gg" target="_blank"><span className="font-bold mr-2">✨ Launch Offer ✨</span>50 prompts for $10</a></button>
      <div className="flex justify-between w-32">
        <Link href="/builder" className={pathname.includes(`/builder`) ? 'bg-indigo-900' : 'bg-zinc-200'}>Builder</Link>
        <Link href="/guides" className={pathname.includes(`/guides`) ? 'bg-indigo-900' : 'bg-zinc-200'}>Guides</Link>
      </div>
    </header>
  )
}