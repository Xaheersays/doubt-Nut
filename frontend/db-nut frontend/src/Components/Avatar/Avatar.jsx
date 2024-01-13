import React from 'react'
import { AvatarGenerator } from 'random-avatar-generator';


function Avatar() {
  const generator = new AvatarGenerator();

  return (
    <div className='h-9 w-9 cursor-pointer'>
      <img src={generator.generateRandomAvatar()} alt="" />
    </div>
  )
}

export default Avatar