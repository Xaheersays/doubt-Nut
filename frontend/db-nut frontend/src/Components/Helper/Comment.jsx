import React from 'react'
import { LiaCommentAlt } from "react-icons/lia";

function Comment() {
  return (
    <div className='cursor-pointer  hover:scale-110 transition duration-300 ease-in-out'>
      <LiaCommentAlt size={20}/>
    </div>
  )
}

export default Comment