import React from 'react'
import {ShowPfp,Button} from '../export'
import { AvatarGenerator } from 'random-avatar-generator';

function Strip({name}) {
  const generator = new AvatarGenerator();

  return (
    <div className='flex gap-4 my-4 items-center justify-between '>
      <div className='flex gap-2 items-center'>
        <ShowPfp source={generator.generateRandomAvatar()} size={'h-12 w-12'}></ShowPfp>
        <p>{name}</p>
      </div>
      <Button btnName={'remove'}/>
    </div>
  )
}

export default Strip