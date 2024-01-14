import React from 'react'
import {Avatar} from '.././export'
function ShowPfp({source,size}) {
  return (
    <div>
        <img className={`${size}`} src={source} alt="" />
    </div>
  )
}

export default ShowPfp