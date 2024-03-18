import Link from 'next/link'
import React from 'react'
import {AiFillBug } from 'react-icons/ai'
const Navbar = () => {

    const links = [
        {label: 'Dasboard', href: '/dashboard'},
        {label: 'Issues', href: '/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center ' > 
        <AiFillBug className='text-4xl'/>
        <Link href={'/'}>Home</Link>
        <ul className='flex flex-col space-x-6'>

            {links.map((link, index) => (

                <li key={index}><Link href={link.href} className='text-zinc-500 hover:text-zinc-800 transition-colors'>{link.label}</Link></li>
            ))}

            

        </ul>

      
    </nav>
  )
}

export default Navbar
