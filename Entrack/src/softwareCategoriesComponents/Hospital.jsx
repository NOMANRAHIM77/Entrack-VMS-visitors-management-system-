import React from 'react'

const Hospital = () => {
  return (
    <>
    <div  className='w-full h-full flex justify-around gap-5 p-10 items-center ' >
    <div  className='bg-black rounded-4xl h-125 w-13' ></div>
    <div className='bg-red-400 rounded-2xl w-250 h-122 flex flex-col ' >

      <div className='w-full h-[50%] bg-purple-600 flex flex-row gap-10 p-8' >

         <div className='w-10 h-10 rounded-2xl bg-white' ></div>
        <div className='w-10 h-10 rounded-2xl bg-white' ></div>
<div className='w-10 h-10 rounded-2xl bg-white' ></div>

      </div>
      <div  className='w-full h-[50%] bg-purple-300 '  ></div>
    </div>
    </div>
    </>
  )
}

export default Hospital