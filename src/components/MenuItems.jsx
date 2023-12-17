import React from 'react'
import { Link } from 'react-router-dom'
const MenuItems = () => {
  return (
    <>
    <ul className='flex gap-4 items-center'>
            {/* <li><FaBars/></li> */}
            <Link to="/">
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to="/About">
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to="/sign-in">
            <li className='inline text-slate-700 hover:underline'>Signin</li>
            </Link>
        </ul>
    </>
  )
}

export default MenuItems