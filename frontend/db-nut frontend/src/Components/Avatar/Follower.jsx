import React from 'react'
import { ListPopup,AlignCenter } from '../export'
import { useSelector } from 'react-redux'
import { toggleFWPopup } from '../../Store/PopupSlice';


function Follower() {
  const showPopup = useSelector((state) => state.popup.showFWPopup);

  const followers = []
  for(let i=0 ;i<100 ;i++){
      followers.push('follower'+i)
  }
  return (
    <>
      {showPopup &&  <AlignCenter>
        <div className='w-1/2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-96 overflow-y-scroll border  py-4 rounded-md '>
        <ListPopup data={followers} title={'FOLLOWERS'} dispatchFunction={toggleFWPopup}/>
      </div>
      </AlignCenter>}
    </>
  )
}

export default Follower