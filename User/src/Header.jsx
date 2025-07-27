import React from 'react'

function Header() {
  return (
    <>
    <div className='flex flex-wrap  justify-between px-10 mb-5 py-5 bg-blue-400  items-center'>
        <h1 className='text-2xl'>Total User: </h1>
        <button className='text-2xl border-1 px-5 items-center rounded-2xl'>+</button>
    </div>
    </>
  )
}

export default Header