import React from 'react'
import { Button,AlignCenter ,ShowPfp} from '../export';
import logoImg from '../../assets/logo.png'
import { useSelector,useDispatch } from 'react-redux';
import { togglePopup } from '../../Store/PopupSlice';

function Avatar() {
  const showPopup = useSelector(state=>state.popup.showPopup)
  const dispatch = useDispatch()
  const displayPopup = ()=>{
    dispatch(togglePopup())
  }
  return (
    <AlignCenter>
      <div className='flex flex-col justify-center items-center gap-10 my-10'>
        <div className='h-44 w-44 cursor-pointer flex justify-center items-center '>
          <ShowPfp source={logoImg} size={''}/>
        </div>
        <div className='flex gap-3 '>
          <Button onClick={displayPopup} btnName={'Followers'}/>
          <Button onClick={displayPopup} btnName={'Following'}/>
        </div>
      </div>
    </AlignCenter>
  )
}

export default Avatar