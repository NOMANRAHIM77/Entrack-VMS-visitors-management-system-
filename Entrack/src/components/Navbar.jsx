import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className='flex justify-around gap-120 h-14 bg-gray-300 items-center '  >
        <Link  to="/softwarecategories"  className='tracking-widest text-1xl bg-blue-400 rounded-1xl text-black p-2 cursor-pointer  hvr-shutter-out-horizontal   ' >Get Started</Link  >

        <div  className='flex justify-around  gap-6' >
            <Link   to="/home"  className='hvr-grow' >Home</Link>
            <Link   to="/about"  className='hvr-grow' >About Sofware</Link>
            <Link   to="/pricing"  className='hvr-grow' >Pricing</Link>
            <Link   to="/developersinfo"  className='hvr-grow' >Developers info</Link>
        </div>

    </div>
    </>
  )
}

export default Navbar