import React from 'react'
import { AlignCenter,ListPopup } from '../export';
import { useSelector } from 'react-redux';
import { toggleFGPopup } from '../../Store/PopupSlice';
function Following() {
  const showPopup = useSelector((state) => state.popup.showFGPopup);
  const following = []
  for(let i=0 ;i<100 ;i++){
    following.push('following'+i)
  }
  return (
    <>
      {showPopup &&  <AlignCenter>
      <div  className='w-1/2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-96 overflow-y-scroll border  py-4 rounded-md '>
        <ListPopup data={following} title={'FOLLOWING'} dispatchFunction={toggleFGPopup}/>
      </div>
      </AlignCenter>}
    </>
  )
}

export default Following