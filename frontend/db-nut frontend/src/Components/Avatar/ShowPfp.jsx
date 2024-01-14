import React from 'react'
function ShowPfp({source,size}) {
  return (
    <div>
      <img className={`${size}`} src={source} alt="" />
    </div>
  )
}

export default ShowPfp