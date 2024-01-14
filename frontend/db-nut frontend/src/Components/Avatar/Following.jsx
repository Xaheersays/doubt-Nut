import React from 'react'
import { AlignCenter,ListPopup } from '../export';
import { useSelector } from 'react-redux';
function Following() {
  const showPopup = useSelector((state) => state.popup.showPopup);
  const following = []
  for(let i=0 ;i<100 ;i++){
    following.push('follower'+i)
  }
  return (
    <>
      {showPopup &&  <AlignCenter>
      <div  className=' w-1/2  scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-96 overflow-y-scroll'>
        <ListPopup data={following} title={'FOLLOWING'}/>
      </div>
      </AlignCenter>}
    </>
  )
}

export default Following