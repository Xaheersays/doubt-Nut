import React from 'react'
import { Container } from '../export'
import logoimg from '../../assets/logo.png'

function Logo() {
  return (
    <div>
      <div className='h-16 w-16 '>
        <img  src={logoimg} alt="" />
      </div>
    </div>
  )
}

export default Logo