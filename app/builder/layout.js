import Link from 'next/link'
// Components
import Sidebar from "../../components/sidebar"

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Build',
  description: 'LEGO',
}

export default function RootLayout({ children }) {
  return (
    <main className="flex">
      <Sidebar/>
      {children}
    </main>
  )
}