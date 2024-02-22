import React from 'react'

function SmallProfile({src}) {
  return (
    <div className='h-10 w-10 rounded-full'>
      <img src={src}></img>
    </div>
  )
}

export default SmallProfile