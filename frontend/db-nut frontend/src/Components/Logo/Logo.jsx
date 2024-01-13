import React from 'react'
import { Container } from '../export'
import logoimg from '../../assets/logo.png'

function Logo() {
  return (
    <div>
      <Container>
          <div className='h-16 w-16 '>
            <img className='m-2' src={logoimg} alt="" />
          </div>
      </Container>
    </div>
  )
}

export default Logo