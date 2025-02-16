import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

  const user = true;

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
                user ? <div className='flex space-x-4 mr-10'>
                    <Link href="/profile">
                        <Image src="/profile.png" alt="profile" width={44} height={44} />
                    </Link>
                    <button className='cursor-pointer hover:text-yellow-300'>Logout</button>
                </div> : <div className='bg-blue-400 text-white px-6 py-2 rounded-full mr-10 cursor-pointer hover:bg-blue-600'>Login</div>
            }
        </nav>
    </header>
  )
}

export default Navbar