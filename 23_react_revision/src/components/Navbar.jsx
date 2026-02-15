import React from 'react'
import NavPart2 from './NavPart2'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-emerald-400 flex py-5 px-10 items-center justify-between '>
    <h2 className='text-2xl'>Harshal</h2>
    <NavPart2 />
   </nav>
    </div>
  
  )
}

export default Navbar
