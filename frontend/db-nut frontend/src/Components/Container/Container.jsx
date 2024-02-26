import React from 'react'

function Container({children}) {
  return (
    <div className='mx-6 md:mx-12 '>
        {children}
    </div>
  )
}

export default Container