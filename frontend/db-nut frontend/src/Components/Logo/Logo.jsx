import React,{memo} from 'react'
import { Container } from '../export'
import logoimg from '../../assets/logo.png'

function Logo({className}) {
  return (
    <div>
      <div className={`${className}`} >
        <img src={logoimg} alt="" />
      </div>
    </div>
  )
}

export default memo(Logo);