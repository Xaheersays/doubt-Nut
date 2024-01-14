import React from 'react'
import {ShowPfp,Button} from '../export'

function Strip({name}) {
  

  return (
    <div className='flex gap-4 my-4 items-center justify-between  bg-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-md p-4 rounded-md'>
      <div className='flex gap-2 items-center'>
        <ShowPfp source={''} size={'h-8 w-8'}></ShowPfp>
        <p>{name}</p>
      </div>
      <Button btnName={'Remove'} />
    </div>
  )
}

export default Strip