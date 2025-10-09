import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-around gap-120 h-14 bg-gray-300 items-center '  >
        <p className='tracking-widest text-2xl ' >ENTRACK</p>

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