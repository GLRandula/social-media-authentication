import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='bg-gray-800 text-white p-4'>
        <nav className='container mx-auto flex justify-between items-center'>
            {/* Logo */}
            <div className='text-lg font-semibold ml-10'>
                <Link href="/">Logo</Link>
            </div>

            {/* Navigation Items */}
            <ul className='flex space-x-8 items-center mr-10'>
                <li><Link href="/" className='hover:text-yellow-300'>Home</Link></li>
                <li><Link href="/about" className='hover:text-yellow-300'>About</Link></li>
                <li><Link href="/dashboard" className='hover:text-yellow-300'>Dashboard</Link></li> 
                <li><Link href="/contact" className='hover:text-yellow-300'>Contact</Link></li>
            </ul>

            {/* User Profile */}
        </nav>
    </header>
  )
}

export default Navbar