import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-around gap-120 h-14 bg-gray-300 items-center '  >
        <p className='tracking-widest text-1xl bg-blue-400 rounded-1xl text-black p-2 cursor-pointer  hvr-shutter-out-horizontal   ' >Get Started</p>

        <div  className='flex justify-around  gap-6' >
            <a href="" className='hvr-grow' >Home</a>
            <a href="" className='hvr-grow' >About Sofware</a>
            <a href="" className='hvr-grow' >Pricing</a>
            <a href="" className='hvr-grow' >Developers info</a>
        </div>

    </div>
    </>
  )
}

export default Navbar