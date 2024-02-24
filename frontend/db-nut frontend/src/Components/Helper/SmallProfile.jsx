import React from 'react'

function SmallProfile({src}) {
  return (
    <div className= ' h-10 w-10 rounded-full  hover:scale-110 transition duration-300 ease-in-out'>
      <img src={src}></img>
    </div>
  )
}

export default SmallProfile