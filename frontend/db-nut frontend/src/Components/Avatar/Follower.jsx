import React from 'react'

function Follower() {
  const followers = []
  for(let i=0 ;i<1000 ;i++){
      followers.push('follower'+i)
  }
  return (
    <div>Follower</div>
  )
}

export default Follower