import React from 'react'
import {RotatingLines} from 'react-loader-spinner'
function Loader() {
  return (
    <div>
      <RotatingLines
        visible={true}
        height="20"
        width="70"
        color="grey"
        strokeWidth="3"
        animationDuration="0.9"
        ariaLabel="rotating-lines-loading"
      />
  </div>
  )
}

export default Loader