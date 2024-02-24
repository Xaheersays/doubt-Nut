import React from 'react'
import { BiDownvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";

function DownVotes() {
  return (
    <div className='cursor-pointer   hover:scale-110 transition duration-300 ease-in-out'>
      <BiDownvote size={20}/>
    </div>
  )
}

export default DownVotes