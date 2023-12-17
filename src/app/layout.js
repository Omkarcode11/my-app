'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import './layout.css'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const router = useRouter()
  const pathName = usePathname()
  // console.log(pathName)
  return (
    <html lang="en">
      {pathName=='/login'?<body>{children}</body>:
      <body className={inter.className}>
        <div className='navbar'>
          <Link href={'/'}>
          <h2>Omkar</h2>
          </Link>
          <div className='authlink'>
          <button onClick={()=>router.push('/login')}>Login</button>
          <button onClick={()=>router.push('/signup')}>SignUp</button>
          </div>
        </div>
        {children}</body>
      }
    </html>
  )
}
