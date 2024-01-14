import React from 'react'
import {ShowPfp,Button} from '../export'

function Strip({name}) {
  

  return (
    <div className='flex gap-4 my-4 items-center justify-between  bg-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-md p-4 rounded-md'>
      <div className='flex gap-2 items-center'>
        <ShowPfp source={''} size={'h-12 w-12'}></ShowPfp>
        <p>{name}</p>
      </div>
      <Button btnName={'remove'} />
    </div>
  )
}

export default Strip