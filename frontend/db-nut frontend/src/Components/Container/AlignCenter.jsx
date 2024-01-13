import React from 'react'

function AlignCenter({children}) {
  return (
    <div className='flex justify-center items-center'>
      {children}
    </div>
  )
}

export default AlignCenter