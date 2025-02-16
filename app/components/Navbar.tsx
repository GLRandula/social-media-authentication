import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { SignIn, SignOut } from './auth-component';
import { auth } from '@/auth';

const Navbar = async () => {

  const session = await auth();
  console.log(session?.user);

  return (
    <header className='bg-gray-800 text-white p-4'>
        <nav className='container mx-auto flex justify-between items-center'>
            {/* Logo */}
            <div className='text-lg font-semibold ml-10'>
                <Link href="/">Logo</Link>
            </div>

            {/* Navigation Items */}
            <ul className='flex space-x-8 items-center'>
                <li><Link href="/" className='hover:text-yellow-300'>Home</Link></li>
                <li><Link href="/about" className='hover:text-yellow-300'>About</Link></li>
                <li><Link href="/dashboard" className='hover:text-yellow-300'>Dashboard</Link></li> 
                <li><Link href="/contact" className='hover:text-yellow-300'>Contact</Link></li>
            </ul>

            {/* User Profile */}
            {
                session?.user ? <div className='flex space-x-4 mr-10'>
                    <Link href="/profile">
                        <Image src={`${session?.user.image}`} alt="profile" width={44} height={44} className='rounded-full shrink-0' />
                    </Link>
                    <SignOut />
                </div> : <div>
                    <SignIn />
                </div>
            }
        </nav>
    </header>
  )
}

export default Navbar