import React from 'react'
import { AvatarGenerator } from 'random-avatar-generator';
import { Button,AlignCenter } from '../export';
import logoImg from '../../assets/logo.png'
function Avatar() {
  const generator = new AvatarGenerator();

  return (
    <AlignCenter>
      <div className='flex flex-col justify-center items-center gap-10 my-10'>
        <div className='h-44 w-44 cursor-pointer flex justify-center items-center '>
          <img src={logoImg} alt="" />
        </div>
        <div className='flex gap-3 '>
          <Button btnName={'Followers'}/>
          <Button btnName={'Following'}/>
        </div>
      </div>
    </AlignCenter>
  )
}

export default Avatar