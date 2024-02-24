import React from 'react'
import { BiUpvote } from "react-icons/bi";
import { BiSolidUpvote } from "react-icons/bi";


function Upvotes() {
  return (
    <div className='cursor-pointer   hover:scale-110 transition duration-300 ease-in-out'>
      <BiUpvote size={20}/>
    </div>
  )
}

export default Upvotes